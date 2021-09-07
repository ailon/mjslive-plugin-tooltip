import {
  MarkerView,
  IMarkerViewPlugin,
  MarkerViewEventHandler,
} from 'markerjs-live';
import tippy, {followCursor} from 'tippy.js';
import 'tippy.js/dist/tippy.css';

export class Tooltip implements IMarkerViewPlugin {

  /**
   * If true shows tooltip tip.
   */
  public showArrow = false;
  /**
   * If true won't escape HTML and render as HTML (make sure you trust the source).
   */
  public allowHTML = false;
  /**
   * Tooltip follows cursor when true.
   */
  public followCursor = false;
  /**
   * Tippy theme name.
   * @see https://atomiks.github.io/tippyjs/v6/themes/
   */
  public theme = '';

  public init(markerView: MarkerView): void {
    markerView.addEventListener('load', this.markerViewLoaded);
  }

  private markerViewLoaded: MarkerViewEventHandler = (markerView) => {
    markerView.markers.forEach(marker => {
      if (marker.notes) {
        tippy(marker.container, { 
            content: marker.notes,
            arrow: this.showArrow,
            allowHTML: this.allowHTML,
            followCursor: this.followCursor,
            theme: this.theme,
            plugins: [followCursor]
          });
      }
    })
  }
}
