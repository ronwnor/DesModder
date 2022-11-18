import "./SegmentedControl.less";
import { DesmosSegmentedControl } from "./desmosComponents";
import { Component, jsx } from "DCGView";

export default class SegmentedControl extends Component<{
  names: string[];
  selectedIndex: number;
  ariaGroupLabel: string;
  setSelectedIndex(i: number): void;
  allowChange?: boolean;
}> {
  template() {
    return (
      <DesmosSegmentedControl
        staticConfig={this.getStaticConfig()}
        ariaGroupLabel={this.props.ariaGroupLabel()}
      />
    );
  }

  getStaticConfig() {
    return this.props.names().map((name, i) => ({
      key: name,
      label: () => name,
      selected: () => i == this.props.selectedIndex(),
      onSelect: () => this.props.setSelectedIndex(i),
      allowChange: () => this.props.allowChange?.() ?? true,
    }));
  }

  getChangeAllowed(i: number) {
    const allowChange = this.props.allowChange;
    return (
      allowChange === undefined ||
      allowChange() ||
      i === this.props.selectedIndex()
    );
  }
}
