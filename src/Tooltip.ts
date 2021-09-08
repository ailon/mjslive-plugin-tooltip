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
  /**
   * Function to be called to parse each note.
   */
  public notesParser: (notes: string) => string;

  public init(markerView: MarkerView): void {
    markerView.addEventListener('load', this.markerViewLoaded);
  }

  private markerViewLoaded: MarkerViewEventHandler = (markerView) => {
    markerView.markers.forEach(marker => {
      if (marker.notes) {
        const notes = this.notesParser ? this.notesParser(marker.notes) : marker.notes;
        tippy(marker.container, { 
            content: notes,
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
