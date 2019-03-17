import {
  animate,
  group,
  query,
  style,
  transition,
  trigger
} from '@angular/animations';

export const fader = trigger('routeAnimations', [
  transition('*<=>*', [
    query(':enter, leave', [
      style({
        position: 'absolute',
        left: 0,
        opacity: 0,
        transform: 'scale(0) translateY(100%)'
      })
    ]),
    query(':enter', [
      animate(
        '600ms ease',
        style({ opacity: 1, transform: 'scale(1) translateY(0)' })
      )
    ])
  ])
]);

export const componentSlider = trigger('componentAnimations', [
  transition('*=> isLeft', [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          ['right']: 0,
          width: '100%'
        })
      ],
      { optional: true }
    ),
    query(':enter', [style({ ['right']: '-100%' })]),
    group([
      query(':leave', [animate('600ms ease', style({ ['right']: '100%' }))], {
        optional: true
      }),
      query(':enter', [animate('600ms ease', style({ ['right']: '0%' }))])
    ])
  ])
]);

export const slider = trigger('routeAnimations', [
  transition('*=> isLeft', slideTo('left')),
  transition('*=> isRight', slideTo('right')),
  transition('isRight =>*', slideTo('left')),
  transition('isLeft =>*', slideTo('right'))
]);

export function slideTo(direction) {
  const optional = { optional: true };
  return [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          [direction]: 0,
          width: '100%'
        })
      ],
      optional
    ),
    query(':enter', [style({ [direction]: '-100%' })]),
    group([
      query(
        ':leave',
        [animate('600ms ease', style({ [direction]: '100%' }))],
        optional
      ),
      query(':enter', [animate('600ms ease', style({ [direction]: '0%' }))])
    ])
  ];
}
