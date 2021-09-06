import { Todo } from '../../src';
import { MarkerView, MarkerAreaState, MarkerBaseState } from 'markerjs-live';
import { MarkerArea } from 'markerjs2';

export class Experiments {
  private markerView1: MarkerView;
  public currentState: MarkerAreaState = {
    width: 427,
    height: 320,
    markers: [
      {
        strokeColor: '#FFFF00',
        strokeWidth: 3,
        strokeDasharray: '12 3',
        curveX: 315,
        curveY: 55,
        x1: 123,
        y1: 98,
        x2: 338,
        y2: 204,
        typeName: 'CurveMarker',
        state: 'select',
        notes:
          'I think http://google.com is <b>good</b> but https://duckduckgo.com is <i>better</i>',
      } as MarkerBaseState,
      {
        fillColor: 'transparent',
        strokeColor: '#EF4444',
        strokeWidth: 3,
        strokeDasharray: '',
        opacity: 1,
        left: 55,
        top: 51,
        width: 223,
        height: 160,
        rotationAngle: -16.068700831466217,
        visualTransformMatrix: { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 },
        containerTransformMatrix: {
          a: 0.9609305006515487,
          b: -0.27678976302884456,
          c: 0.27678976302884456,
          d: 0.9609305006515487,
          e: -29.75438731526151,
          f: 51.20359995894974,
        },
        typeName: 'FrameMarker',
        state: 'select',
      } as MarkerBaseState,
      {
        color: '#EF4444',
        fontFamily: 'Helvetica, Arial, sans-serif',
        padding: 5,
        text: 'Hello there!',
        left: 226,
        top: 214,
        width: 167,
        height: 68,
        rotationAngle: 0,
        visualTransformMatrix: { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 },
        containerTransformMatrix: { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 },
        typeName: 'TextMarker',
        state: 'select',
        notes: 'Hello,<br />is it me you looking for?',
      } as MarkerBaseState,
      {
        bgColor: '#FFFF00',
        tipPosition: { x: -88.82403945922852, y: 108.55281066894531 },
        color: '#2563EB',
        fontFamily: 'Helvetica, Arial, sans-serif',
        padding: 5,
        text: 'This is awesome!',
        left: 117,
        top: 56,
        width: 167,
        height: 67,
        rotationAngle: -28.16252737432361,
        visualTransformMatrix: { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 },
        containerTransformMatrix: {
          a: 0.8816123239267032,
          b: -0.4719742686848063,
          c: 0.4719742686848063,
          d: 0.8816123239267032,
          e: -18.504967994594153,
          f: 105.22653787986373,
        },
        typeName: 'CalloutMarker',
        state: 'select',
      } as MarkerBaseState,
    ],
  };

  public openMarkerView(target: HTMLImageElement): void {
    this.markerView1 = new MarkerView(target);

    this.markerView1.addPlugin(new Todo());

    this.markerView1.show(this.currentState);
  }

  public closeMarkerView(): void {
    if (this.markerView1) {
      this.markerView1.close();
    }
  }

  public showMarkerArea(): void {
    const markerArea = new MarkerArea(
      <HTMLImageElement>document.getElementById('testImage1')
    );
    markerArea.uiStyleSettings.notesButtonVisible = true;

    markerArea.addRenderEventListener((dataUrl, state) => {
      this.currentState = state;
      (<HTMLTextAreaElement>document.getElementById('markerAreaState')).value =
        JSON.stringify(this.currentState);
      (<HTMLImageElement>document.getElementById('resultImage')).src = dataUrl;
    });
    markerArea.show();

    markerArea.restoreState(this.currentState);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const experiments = new Experiments();

  (<HTMLTextAreaElement>document.getElementById('markerAreaState')).value =
    JSON.stringify(experiments.currentState);

  const targetImg = document.getElementById('testImage1') as HTMLImageElement;
  targetImg.addEventListener('click', () =>
    experiments.openMarkerView(targetImg)
  );
  document.getElementById('viewButton').addEventListener('click', () => {
    experiments.openMarkerView(targetImg);
  });
  document.getElementById('closeViewButton').addEventListener('click', () => {
    experiments.closeMarkerView();
  });
  document.getElementById('editButton').addEventListener('click', () => {
    experiments.showMarkerArea();
  });
});
