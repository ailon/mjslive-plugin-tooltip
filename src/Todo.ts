import {
  MarkerView,
  IMarkerViewPlugin,
  MarkerEventHandler,
} from 'markerjs-live';

export class Todo implements IMarkerViewPlugin {
  public init(markerView: MarkerView): void {
    // @todo add your actual plugin initialization code here
    markerView.addEventListener('over', this.markerOver);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private markerOver: MarkerEventHandler = (markerView, marker) => {
    // @todo this is just sample empty event handler
  };
}
