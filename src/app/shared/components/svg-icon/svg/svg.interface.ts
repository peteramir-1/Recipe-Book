interface IconPath {
  d: string;
  stroke_linecap?: string;
  stroke_linejoin?: string;
  fill_rule?: string;
  clip_rule?: string;
}

export interface svgData {
  fill: string;
  stroke_width?: string;
  stroke?: string;
  paths: IconPath[];
}

export interface Icons {
  bell: svgData;
  'cog-6-tooth': svgData;
  newspaper: svgData;
  'chevon-up': svgData;
  'chevon-down': svgData;
  'chevon-right': svgData;
  'chevon-left': svgData;
}
