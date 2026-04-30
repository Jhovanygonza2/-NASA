interface Satellite {
  id: string;
  name: string;
  orbit: number;
}

export const trackSatellite = (sat: Satellite): string => {
  return `Tracking ${sat.name} (ID: ${sat.id}) at orbit ${sat.orbit}km`;
};
