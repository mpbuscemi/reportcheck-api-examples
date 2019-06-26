export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string;
      name: string;
      possibleTypes: {
        name: string;
      }[];
    }[];
  };
}

const result: IntrospectionResultData = {
  __schema: {
    types: [
      {
        kind: "UNION",
        name: "ReportResults",
        possibleTypes: [
          {
            name: "DiamondGradingReportResults"
          },
          {
            name: "PearlIdentReportResults"
          },
          {
            name: "NarrativeReportResults"
          },
          {
            name: "SyntheticDiamondGradingReportResults"
          },
          {
            name: "MeleeServiceResults"
          },
          {
            name: "IdentificationReportResults"
          }
        ]
      },
      {
        kind: "UNION",
        name: "Measurements",
        possibleTypes: [
          {
            name: "RoundMeasurements"
          },
          {
            name: "FancyMeasurements"
          }
        ]
      }
    ]
  }
};

export default result;
