export type PlotStatus = 'unknown' | 'available' | 'reserved' | 'sold';

export type Plot = {
  id: number;
  areaSqft: number;
  isCorner: boolean;
  status: PlotStatus;
  svgId: string;
  statusUpdatedAt?: string;
};

const areas = [1248, 1040, 1061, 1075, 1088, 1105, 899, 841, 878, 903, 800, 800, 800, 800, 800, 800, 800, 1000, 1000, 1000];
const corners = new Set([1, 10, 11, 20]);

export const neelbadPlots: Plot[] = areas.map((areaSqft, index) => ({
  id: index + 1,
  areaSqft,
  isCorner: corners.has(index + 1),
  status: 'unknown',
  svgId: `plot-${String(index + 1).padStart(2, '0')}`,
}));

export const plotLabel = (id: number) => `Plot ${String(id).padStart(2, '0')}`;
