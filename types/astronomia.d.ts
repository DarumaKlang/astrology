declare module 'astronomia/planetposition' {
  export class Planet {
    constructor(data: any);
    position(jd: number): { lon: number; lat?: number; range?: number };
  }
}

declare module 'astronomia/data/vsop87Bmercury';
declare module 'astronomia/data/vsop87Bvenus';
declare module 'astronomia/data/vsop87Bmars';
declare module 'astronomia/data/vsop87Bjupiter';
declare module 'astronomia/data/vsop87Bsaturn';
declare module 'astronomia/data/vsop87Buranus';
declare module 'astronomia/data/vsop87Bneptune';

declare module 'astronomia/moonposition' {
  export function position(jd: number): { lon: number; lat?: number };
}

declare module 'astronomia/solar' {
  export function apparentLongitude(jd: number): number;
}
