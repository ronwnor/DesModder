import { DCGView,  MountedComponent } from 'desmodder'
import ReplaceBar from './ReplaceBar'
import Controller from './Controller'

export default class View {
  controller!: Controller
  mountNode: HTMLElement | null = null
  replaceView: MountedComponent | null = null

  init (controller: Controller) {
    this.controller = controller
  }

  initView () {
    const searchBar = document.querySelector('.dcg-expression-search-bar')
    if (searchBar === null) {
      throw new Error('Search bar not found')
    }
    const searchContainer = document.createElement('div')
    searchContainer.style.display = 'flex'
    searchContainer.style.flexDirection = 'column'
    if (searchBar.parentNode === null) {
      throw new Error('Search bar parent node not found')
    }
    searchBar.parentNode.insertBefore(searchContainer, searchBar)
    searchContainer.appendChild(searchBar)
    this.mountNode = document.createElement('div')
    this.mountNode.className = 'findandreplace-expression-replace-bar'
    searchContainer.appendChild(this.mountNode)
    this.replaceView = DCGView.mountToNode(
      ReplaceBar,
      this.mountNode,
      {
        controller: DCGView.const(this.controller)
      }
    )
  }

  destroyView () {
    if (this.mountNode === null) {
      // the view is already destroyed, so no need to throw an error
      return
    }
    DCGView.unmountFromNode(this.mountNode)
  }

  updateReplaceView () {
    this.replaceView && this.replaceView.update()
  }
}
