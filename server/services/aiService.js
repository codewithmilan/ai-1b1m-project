export const generateAdvice = async (category, city) => {
  const adviceMap = {
    Good: `
Health Advice:
Air quality is good.

Sustainability Tip:
Use eco-friendly transport.

Environmental Awareness:
Support green initiatives.
`,

    Fair: `
Health Advice:
Outdoor activities are generally safe.

Sustainability Tip:
Reduce vehicle usage.

Environmental Awareness:
Plant more trees.
`,

    Moderate: `
Health Advice:
Sensitive people should be cautious.

Sustainability Tip:
Use public transport.

Environmental Awareness:
Reduce carbon emissions.
`,

    Poor: `
Health Advice:
Wear a mask outdoors.

Sustainability Tip:
Avoid unnecessary vehicle trips.

Environmental Awareness:
Support clean energy.
`,

    "Very Poor": `
Health Advice:
Stay indoors.

Sustainability Tip:
Minimize pollution-causing activities.

Environmental Awareness:
Promote air quality awareness.
`,
  };

  return adviceMap[category];
};
