import { gql } from "graphql.macro";
import * as React from "react";
import * as ReactApollo from "react-apollo";
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/**   A clarity characteristic listed in the key to symbols. */
export type ClarityCharacteristic = {
  /**   The sort order for this characteristic */
  order: Scalars["Int"];
  /**   The clarity characteristic description */
  characteristic: Scalars["String"];
  /**   Characteristic image  */
  image?: Maybe<Scalars["String"]>;
  /**   The location of the clarity characteristic */
  location?: Maybe<Scalars["String"]>;
};

/**   Machine-readable clarity grade codes */
export enum ClarityGradeCode {
  Fl = "FL",
  If = "IF",
  Vvs1 = "VVS1",
  Vvs2 = "VVS2",
  Vs1 = "VS1",
  Vs2 = "VS2",
  Si1 = "SI1",
  Si2 = "SI2",
  I1 = "I1",
  I2 = "I2",
  I3 = "I3"
}

/**   Machine-readable cut grade codes */
export enum CutGradeCode {
  Ex = "EX",
  Vg = "VG",
  G = "G",
  F = "F",
  P = "P"
}

/**   Additional data fields in machine-readable format */
export type DiamondData = {
  /**   The shape details */
  shape?: Maybe<DiamondShape>;
  /**   The measurement details */
  measurements?: Maybe<Measurements>;
  /**   The weight details */
  weight?: Maybe<Weight>;
  /**   The color grade */
  color?: Maybe<DzColorGrade>;
  /**   The clarity grade */
  clarity?: Maybe<ClarityGradeCode>;
  /**   The cut grade */
  cut?: Maybe<CutGradeCode>;
  /**   The polish grade */
  polish?: Maybe<PolishGradeCode>;
  /**   The symmetry grade */
  symmetry?: Maybe<SymmetryGradeCode>;
  /**   Fluorescence */
  fluorescence?: Maybe<Fluorescence>;
  /**   Girdle condition */
  girdle?: Maybe<Girdle>;
  /**   Inscription graphics */
  inscription_graphics?: Maybe<Array<Maybe<InscriptionGraphic>>>;
};

/**   Results for core grading services such as Dossier, Diamond Grading, and Colored Diamond Grading. */
export type DiamondGradingReportResults = {
  /**   The outline of the diamond shape and the pattern of the facet arrangement cutting style. */
  shape_and_cutting_style: Scalars["String"];
  /**   Diamond dimensions listed as 'minimum diameter – maximum diameter x depth'
   * for round diamonds and 'length x width x depth' for fancy-shaped diamonds.
   */
  measurements: Scalars["String"];
  /**   Weight given in carats, recorded to the nearest hundredth of a carat. One carat is equal to 1/5 of a gram. */
  carat_weight: Scalars["String"];
  /**   The absence of color ranging from colorless to light yellow or brown for
   * diamonds on the D-Z scale. The color grade in terms of hue, tone, and
   * saturation for diamonds on the colored diamond grading scale.
   */
  color_grade: Scalars["String"];
  /**   States whether color is natural or treated. In rare cases, color
   * determination may not be possible and is reported as undetermined. Available
   * on specific report types such as colored diamond reports only.
   */
  color_origin?: Maybe<Scalars["String"]>;
  /**   Evenness or unevenness of color seen face-up using standard viewing
   * procedures. Available on specific report types such as colored diamond reports only.
   */
  color_distribution?: Maybe<Scalars["String"]>;
  /**   The relative absence of inclusions and blemishes. Graded on a scale from
   * Flawless to Included based on size, nature, number, position, and relief of
   * characteristics visible under 10x magnification.
   */
  clarity_grade?: Maybe<Scalars["String"]>;
  /**   For standard, D-to-Z color, round brilliant diamonds. Cut grade incorporates
   * the aspects of face-up appearance, design, and craftsmanship.
   */
  cut_grade?: Maybe<Scalars["String"]>;
  /**   M2M data and media */
  m2m_rough_data?: Maybe<M2MRoughData>;
  /**   Smoothness of the diamond’s surface, assessed on a scale ranging from excellent to poor. */
  polish?: Maybe<Scalars["String"]>;
  /**   Exactness of the diamond’s outline, and the shape, placement, and alignment
   * of its facets, assessed on a scale ranging from excellent to poor.
   */
  symmetry?: Maybe<Scalars["String"]>;
  /**   Strength and color of the diamond when viewed under long-wave ultraviolet
   * light. A fluorescence description of 'none' represents a range of fluorescence
   * from indiscernible to very faint.
   */
  fluorescence?: Maybe<Scalars["String"]>;
  /**   List of the most significant clarity characteristics present in the diamond
   * that justifies the clarity grade. Available on Dossier reports only.
   */
  clarity_characteristics?: Maybe<Scalars["String"]>;
  /**   List of clarity characteristics plotted on the diagram. Available for Diamond
   * Grading and Colored Diamond Grading reports.
   */
  key_to_symbols?: Maybe<Array<Maybe<ClarityCharacteristic>>>;
  /**   Any text, symbols, logos, or a unique GIA report number inscribed on the diamond. */
  inscriptions?: Maybe<Scalars["String"]>;
  /**   Additional identifying characteristics or features that are not otherwise
   * represented on the report. If a treatment is detected, such as laser drilling,
   * it would be described here.
   */
  report_comments?: Maybe<Scalars["String"]>;
  duplicate_comments?: Maybe<Scalars["String"]>;
  /**   The diamond's proportions, as shown in the proportion diagram */
  proportions?: Maybe<DiamondProportions>;
  /**   The diamond's country of origin, if applicable */
  country_of_origin?: Maybe<Scalars["String"]>;
  /**   Additional data fields in machine-readable format */
  data?: Maybe<DiamondData>;
};

/**   Parameters available on the proportion diagram if any. */
export type DiamondProportions = {
  /**   Table-to-culet depth, expressed as a percentage of average girdle diameter for round shapes or width for fancy shapes. */
  depth_pct?: Maybe<Scalars["String"]>;
  /**   Table size expressed as a percentage of a round brilliant's average girdle
   * diameter for round shapes or width for fancy shapes.
   */
  table_pct: Scalars["String"];
  /**   The average of the angles of the bezel facet planes relative to the table planes. Available for RBC only. */
  crown_angle?: Maybe<Scalars["String"]>;
  /**   Measurement from the table plane to the intersection of the bezel facet with the girdle. Available for RBC only. */
  crown_height?: Maybe<Scalars["String"]>;
  /**   Average of the angles formed by the pavilion main facet planes and the girdle plane. Available for RBC only. */
  pavilion_angle?: Maybe<Scalars["String"]>;
  /**   Measured from the girdle to the culet, then expressed as a percentage of
   * average girdle diameter. Available for RBC only.
   */
  pavilion_depth?: Maybe<Scalars["String"]>;
  /**   Length of star facets expressed as a percentage of the total distance between
   * the girdle and the edge of the table facet. Available for RBC only.
   */
  star_length?: Maybe<Scalars["String"]>;
  /**   Length of lower-half facets expressed as a percentage of the total distance
   * between the girdle and the culet. Available for RBC only.
   */
  lower_half?: Maybe<Scalars["String"]>;
  /**   Thickness of the intersection of the crown and pavilion which defines the perimeter of the diamond. */
  girdle: Scalars["String"];
  /**   Size of the facet at the tip of a gemstone relative to the average diameter for round shapes or width for fancy shapes. */
  culet: Scalars["String"];
};

/**   The diamond shape details */
export type DiamondShape = {
  /**   Shape category is Round R or Fancy F */
  shape_category: ShapeCategory;
  /**   Abbreviated shape */
  shape_code: Scalars["String"];
  /**   Shape group such as Round or Square */
  shape_group: Scalars["String"];
  /**   Abbreviated shape group */
  shape_group_code: Scalars["String"];
};

/**   Fields on the D-Z scale */
export type DzColorGrade = {
  color_grade_code?: Maybe<DzColorGradeCode>;
  /**   Color modifier */
  color_modifier?: Maybe<Scalars["String"]>;
};

/**   D-Z Color Grades */
export enum DzColorGradeCode {
  D = "D",
  E = "E",
  F = "F",
  G = "G",
  H = "H",
  I = "I",
  J = "J",
  K = "K",
  L = "L",
  M = "M",
  N = "N",
  Op = "OP",
  Qr = "QR",
  St = "ST",
  Uv = "UV",
  Wx = "WX",
  Yz = "YZ"
}

/**   Measurements fields for round diamonds: length x width x depth */
export type FancyMeasurements = {
  /**   Length */
  length: Scalars["Float"];
  /**   Width */
  width: Scalars["Float"];
  /**   Depth */
  depth: Scalars["Float"];
};

/**   Fluorescence has a color and intensity */
export type Fluorescence = {
  fluorescence_intensity?: Maybe<FluorescenceIntensityCode>;
  fluorescence_color?: Maybe<FluorescenceColor>;
};

/**   Possible values for fluorescence color */
export enum FluorescenceColor {
  Blue = "Blue",
  Green = "Green",
  Orange = "Orange",
  Red = "Red",
  White = "White",
  Yellow = "Yellow"
}

/**   Coded values for fluorescence intensity */
export enum FluorescenceIntensityCode {
  Non = "NON",
  Fnt = "FNT",
  Med = "MED",
  Stg = "STG",
  Vst = "VST"
}

export type Girdle = {
  girdle_condition?: Maybe<Scalars["String"]>;
  girdle_pct?: Maybe<Scalars["String"]>;
  girdle_size?: Maybe<Scalars["String"]>;
};

/**   The base grading report object */
export type GradingReport = {
  /**   Date item was examined by GIA */
  report_date: Scalars["String"];
  /**   Date item was examined by GIA, in ISO-8601 format */
  report_date_iso: Scalars["String"];
  /**   Unique GIA report number registered in GIA's database */
  report_number: Scalars["String"];
  /**   The type of GIA report */
  report_type: Scalars["String"];
  /**   The type of GIA report, in machine-readable format */
  report_type_code: ReportTypeCode;
  /**   The grading results as shown on the GIA report */
  results?: Maybe<ReportResults>;
  /**   Links to other files, such as images and PDFs */
  links?: Maybe<Links>;
  /**   Quota remaining after this report is returned */
  quota?: Maybe<Quota>;
  /**   Any special information regarding your report request, for example if your
   * original requested report has been updated to a different report number
   */
  info_message?: Maybe<Scalars["String"]>;
  /**   If report is part of digital program */
  is_digital?: Maybe<Scalars["Boolean"]>;
};

/**   The tabular report format is used on most gem identification reports. */
export type IdentificationReportResults = {
  /**   Weight given in carats, recorded to the nearest hundredth of a carat. One carat is equal to 1/5 of a gram. */
  weight: Scalars["String"];
  /**   Diamond dimensions listed as 'minimum diameter – maximum diameter x depth'
   * for round diamonds and 'length x width x depth' for fancy-shaped diamonds.
   */
  measurements: Scalars["String"];
  /**   Description of the outline of the gemstone. */
  shape?: Maybe<Scalars["String"]>;
  /**   Description of the outline of the gemstone. */
  cutting_style?: Maybe<Scalars["String"]>;
  cutting_style_crown?: Maybe<Scalars["String"]>;
  cutting_style_pavilion?: Maybe<Scalars["String"]>;
  /**   Description of the degree to which the gemstone allows light to pass through it. */
  transparency?: Maybe<Scalars["String"]>;
  /**   General description of the color. */
  color?: Maybe<Scalars["String"]>;
  /**   Description of the mounted item and additional information. */
  item_description?: Maybe<Scalars["String"]>;
  /**   Gem category based on chemical composition and crystal structure. */
  species?: Maybe<Scalars["String"]>;
  geographic_origin?: Maybe<Scalars["String"]>;
  variety?: Maybe<Scalars["String"]>;
  phenomenon?: Maybe<Scalars["String"]>;
  /**   Treatments identified. */
  treatment?: Maybe<Scalars["String"]>;
  /**   Additional identifying characteristics or features that are not otherwise represented on the report. */
  report_comments?: Maybe<Scalars["String"]>;
  duplicate_comments?: Maybe<Scalars["String"]>;
};

export type InscriptionGraphic = {
  description?: Maybe<Scalars["String"]>;
  image?: Maybe<Scalars["String"]>;
};

/**   Results for grading reports on synthetic diamonds. */
export type LabGrownDiamondGradingReportResults = {
  /**   The identification of the item */
  identification: Scalars["String"];
  /**   The outline of the diamond shape and the pattern of the facet arrangement cutting style. */
  shape_and_cutting_style: Scalars["String"];
  /**   Diamond dimensions listed as 'minimum diameter – maximum diameter x depth'
   * for round diamonds and 'length x width x depth' for fancy-shaped diamonds.
   */
  measurements: Scalars["String"];
  /**   Weight given in carats, recorded to the nearest hundredth of a carat. One carat is equal to 1/5 of a gram. */
  carat_weight: Scalars["String"];
  /**   The absence of color ranging from colorless to light yellow or brown for
   * diamonds on the D-Z scale. The color grade in terms of hue, tone, and
   * saturation for diamonds on the colored diamond grading scale.
   */
  color_grade: Scalars["String"];
  /**   States whether color is natural or treated. In rare cases, color
   * determination may not be possible and is reported as undetermined. Available
   * on specific report types such as colored diamond reports only.
   */
  color_origin?: Maybe<Scalars["String"]>;
  /**   Evenness or unevenness of color seen face-up using standard viewing
   * procedures. Available on specific report types such as colored diamond reports only.
   */
  color_distribution?: Maybe<Scalars["String"]>;
  /**   The relative absence of inclusions and blemishes. Graded on a scale from
   * Flawless to Included based on size, nature, number, position, and relief of
   * characteristics visible under 10x magnification.
   */
  clarity_grade?: Maybe<Scalars["String"]>;
  /**   For standard, D-to-Z color, round brilliant diamonds. Cut grade incorporates
   * the aspects of face-up appearance, design, and craftsmanship.
   */
  cut_grade?: Maybe<Scalars["String"]>;
  /**   Smoothness of the diamond’s surface, assessed on a scale ranging from excellent to poor. */
  polish?: Maybe<Scalars["String"]>;
  /**   Exactness of the diamond’s outline, and the shape, placement, and alignment
   * of its facets, assessed on a scale ranging from excellent to poor.
   */
  symmetry?: Maybe<Scalars["String"]>;
  /**   Strength and color of the diamond when viewed under long-wave ultraviolet
   * light. A fluorescence description of 'none' represents a range of fluorescence
   * from indiscernible to very faint.
   */
  fluorescence?: Maybe<Scalars["String"]>;
  /**   List of clarity characteristics plotted on the diagram. Available for Diamond
   * Grading and Colored Diamond Grading reports.
   */
  key_to_symbols?: Maybe<Array<Maybe<ClarityCharacteristic>>>;
  /**   Any text, symbols, logos, or a unique GIA report number inscribed on the diamond. */
  inscriptions?: Maybe<Scalars["String"]>;
  /**   Additional identifying characteristics or features that are not otherwise
   * represented on the report. If a treatment is detected, such as laser drilling,
   * it would be described here.
   */
  report_comments?: Maybe<Scalars["String"]>;
  duplicate_comments?: Maybe<Scalars["String"]>;
};

/**   Links to supplementary files, such as PDFs and images. */
export type Links = {
  /**   Report facsimile in PDF format. */
  pdf?: Maybe<Scalars["String"]>;
  /**   Graphic profile representation of the diamond's actual proportions. */
  proportions_diagram?: Maybe<Scalars["String"]>;
  /**   Plotting diagram with symbols to indicate the type or nature, position, and
   * the approximate size of a clarity characteristic.
   */
  plotting_diagram?: Maybe<Scalars["String"]>;
  /**   Digital image of the item. */
  image?: Maybe<Scalars["String"]>;
  /**   Digital image of the rough item */
  rough_image?: Maybe<Scalars["String"]>;
  /**   Digital video of the rough item. */
  rough_video?: Maybe<Scalars["String"]>;
  /**   Digital image of the polished item. */
  polished_image?: Maybe<Scalars["String"]>;
  /**   Digital video of the polished item. */
  polished_video?: Maybe<Scalars["String"]>;
};

export type M2MRoughData = {
  rough_image?: Maybe<Scalars["String"]>;
  rough_video?: Maybe<Scalars["String"]>;
  polished_image?: Maybe<Scalars["String"]>;
  polished_video?: Maybe<Scalars["String"]>;
  country_of_origin?: Maybe<Scalars["String"]>;
};

/**   Detailed measurements fields */
export type Measurements = RoundMeasurements | FancyMeasurements;

/**   The GIA Melee Analysis Service separates natural, untreated diamonds from
 * simulants, synthetic and HPHT treated natural diamonds, and sorts the screened
 * diamonds by color range.
 */
export type MeleeServicePackage = {
  /**   Service results number */
  service_results_number: Scalars["String"];
  /**   Date of issue */
  issue_date: Scalars["String"];
  /**   The outline of the items when viewed face up. */
  melee_shape?: Maybe<Scalars["String"]>;
  /**   Dimension range for the items in this package, measured in millimeters. Listed as 'minimum diameter – maximum diameter'. */
  diameter?: Maybe<Scalars["String"]>;
  /**   Total weight of items in this package given in carats, recorded to the nearest hundredth of a carat.  */
  total_carat_weight?: Maybe<Scalars["String"]>;
  /**   The color range of the items in this package. A D-to-Z color grade describes
   * the absence of color ranging from colorless to light yellow or brown when
   * compared to GIA Master Color Comparison Diamonds.
   */
  color_range?: Maybe<Scalars["String"]>;
  /**   The count of items contained in this package. */
  number_of_items?: Maybe<Scalars["Int"]>;
  /**   Describes the material tested in this package. */
  material_test_results?: Maybe<Scalars["String"]>;
  /**   Additional identifying characteristics or features that are not otherwise represented. */
  comments?: Maybe<Scalars["String"]>;
};

/**   The GIA Melee Analysis Service separates natural, untreated diamonds from
 * simulants, synthetic and HPHT treated natural diamonds, and sorts the screened
 * diamonds by color range.
 */
export type MeleeServiceResults = {
  /**   Array of packages included in the Melee Analysis service */
  packages?: Maybe<Array<Maybe<MeleeServicePackage>>>;
};

/**   The narrative report format is used on some gem identification reports. */
export type NarrativeReportResults = {
  /**   The title of the report */
  report_title?: Maybe<Scalars["String"]>;
  /**   A description of the item */
  description: Scalars["String"];
  /**   The identification conclusion */
  conclusion: Scalars["String"];
  /**   Additional identifying characteristics or features that are not otherwise
   * represented on the report. If a treatment is detected, such as laser drilling,
   * it would be described here.
   */
  report_comments?: Maybe<Scalars["String"]>;
  duplicate_comments?: Maybe<Scalars["String"]>;
  /**   Any text, symbols, logos, or a unique GIA report number inscribed on the item. */
  inscriptions?: Maybe<Scalars["String"]>;
};

/**   Pearl Identification Tabular Format */
export type PearlIdentReportResults = {
  /**   This is based on the current report format as of 10/20/2018. This does not
   * include quanitity or drilling. The title of the report
   */
  report_title?: Maybe<Scalars["String"]>;
  item_description?: Maybe<Scalars["String"]>;
  /**   Weight of the pearls being identified In grams for mounted or strung pearls.
   * In carats for cultured loose pearls. Or in carats and grains for natural loose pearls.
   */
  weight: Scalars["String"];
  /**   In millimeters. Diameter measurement for round or spherical shapes. Length x
   * width x depth for other shapes. For multiple pearls, a range of measurements
   * from maximum to minimum is listed.
   */
  measurements: Scalars["String"];
  /**   Describes the shape of the pearls being identified. */
  shape?: Maybe<Scalars["String"]>;
  /**   Describes the overall color of the pearl. */
  bodycolor: Scalars["String"];
  /**   Any single noticeable translucent color that overlies the bodycolor. Includes
   * orient - multiple overlying colors or a form of iridescence that appears to be
   * on or just below the surface. Not all pearls display overtone or orient.
   */
  overtone: Scalars["String"];
  /**   Identification */
  identification: Scalars["String"];
  /**   Environment in which the pearl was created: freshwater or saltwater. */
  environment: Scalars["String"];
  /**   The genus and species of the source mollusk. */
  mollusk: Scalars["String"];
  /**   The surface condition of the item. */
  surface?: Maybe<Scalars["String"]>;
  /**   Indicates any detectable treatments. */
  treatment?: Maybe<Scalars["String"]>;
  /**   Additional identifying characteristics or features that are not otherwise represented on the report. */
  report_comments?: Maybe<Scalars["String"]>;
  duplicate_comments?: Maybe<Scalars["String"]>;
};

/**   Machine-readable polish grade codes */
export enum PolishGradeCode {
  Ex = "EX",
  Vg = "VG",
  G = "G",
  F = "F",
  P = "P"
}

/**   Query your grading report */
export type Query = {
  /**   Get the data given by a GIA grading report */
  getReport?: Maybe<GradingReport>;
  /**   Check your quota, does not consume a report request from your quota */
  getQuota?: Maybe<Quota>;
};

/**   Query your grading report */
export type QueryGetReportArgs = {
  report_number: Scalars["String"];
};

export type Quota = {
  remaining: Scalars["Int"];
};

/**   The structure of report results varies by the type of report */
export type ReportResults =
  | DiamondGradingReportResults
  | PearlIdentReportResults
  | NarrativeReportResults
  | LabGrownDiamondGradingReportResults
  | MeleeServiceResults
  | IdentificationReportResults;

/**   Machine-readable report type codes */
export enum ReportTypeCode {
  Al = "AL",
  Ccr = "CCR",
  Cd = "CD",
  Cdor = "CDOR",
  Ci = "CI",
  Dd = "DD",
  Dor = "DOR",
  Er = "ER",
  Fc = "FC",
  Dg = "DG",
  Der = "DER",
  Eo = "EO",
  Id = "ID",
  Jr = "JR",
  Mle = "MLE",
  Pg = "PG",
  Pi = "PI",
  Rg = "RG",
  Ro = "RO",
  Sg = "SG",
  So = "SO",
  Spor = "SPOR",
  Spr = "SPR",
  Scd = "SCD",
  Sci = "SCI",
  Sdg = "SDG",
  Tor = "TOR",
  Tr = "TR"
}

/**   Measurements fields for round diamonds: min_diam - max_diam x depth */
export type RoundMeasurements = {
  /**   Minimum Diameter */
  min_diam: Scalars["Float"];
  /**   Maximum Diameter */
  max_diam: Scalars["Float"];
  /**   Depth */
  depth: Scalars["Float"];
};

/**   Shapes are categorized into Round R and Fancy F */
export enum ShapeCategory {
  F = "F",
  R = "R"
}

export enum SymmetryGradeCode {
  Ex = "EX",
  Vg = "VG",
  G = "G",
  F = "F",
  P = "P"
}

/**   Weight of the item */
export type Weight = {
  /**   The weight of the item */
  weight: Scalars["Float"];
  /**   The unit of weight */
  weight_unit?: Maybe<Scalars["String"]>;
};
export type Get_ReportQueryVariables = {
  report_number: Scalars["String"];
};

export type Get_ReportQuery = { getReport: Maybe<ResultFieldsFragment> };

export type ResultFieldsFragment = Pick<
  GradingReport,
  | "report_date"
  | "report_date_iso"
  | "report_number"
  | "report_type"
  | "report_type_code"
  | "is_digital"
  | "info_message"
> & {
  quota: Maybe<Pick<Quota, "remaining">>;
  results: Maybe<

      | Pick<
          IdentificationReportResults,
          | "weight"
          | "measurements"
          | "shape"
          | "cutting_style"
          | "cutting_style_crown"
          | "cutting_style_pavilion"
          | "transparency"
          | "color"
          | "phenomenon"
          | "item_description"
          | "species"
          | "variety"
          | "geographic_origin"
          | "treatment"
          | "report_comments"
        >
      | (Pick<
          DiamondGradingReportResults,
          | "shape_and_cutting_style"
          | "measurements"
          | "carat_weight"
          | "color_grade"
          | "color_origin"
          | "color_distribution"
          | "clarity_grade"
          | "cut_grade"
          | "polish"
          | "symmetry"
          | "fluorescence"
          | "country_of_origin"
          | "clarity_characteristics"
          | "inscriptions"
          | "report_comments"
        > & {
          key_to_symbols: Maybe<
            Array<
              Maybe<
                Pick<
                  ClarityCharacteristic,
                  "order" | "characteristic" | "location" | "image"
                >
              >
            >
          >;
          proportions: Maybe<
            Pick<
              DiamondProportions,
              | "depth_pct"
              | "table_pct"
              | "crown_angle"
              | "crown_height"
              | "pavilion_angle"
              | "pavilion_depth"
              | "star_length"
              | "lower_half"
              | "girdle"
              | "culet"
            >
          >;
          data: Maybe<
            Pick<DiamondData, "clarity" | "cut" | "polish" | "symmetry"> & {
              shape: Maybe<
                Pick<
                  DiamondShape,
                  | "shape_category"
                  | "shape_code"
                  | "shape_group"
                  | "shape_group_code"
                >
              >;
              measurements: Maybe<

                  | Pick<FancyMeasurements, "length" | "width" | "depth">
                  | Pick<RoundMeasurements, "min_diam" | "max_diam" | "depth">
              >;
              weight: Maybe<Pick<Weight, "weight" | "weight_unit">>;
              color: Maybe<
                Pick<DzColorGrade, "color_grade_code" | "color_modifier">
              >;
              fluorescence: Maybe<
                Pick<
                  Fluorescence,
                  "fluorescence_color" | "fluorescence_intensity"
                >
              >;
              girdle: Maybe<
                Pick<Girdle, "girdle_condition" | "girdle_pct" | "girdle_size">
              >;
              inscription_graphics: Maybe<
                Array<Maybe<Pick<InscriptionGraphic, "description" | "image">>>
              >;
            }
          >;
        })
      | (Pick<
          LabGrownDiamondGradingReportResults,
          | "identification"
          | "shape_and_cutting_style"
          | "measurements"
          | "carat_weight"
          | "color_grade"
          | "color_origin"
          | "color_distribution"
          | "clarity_grade"
          | "cut_grade"
          | "polish"
          | "symmetry"
          | "fluorescence"
          | "inscriptions"
          | "report_comments"
        > & {
          key_to_symbols: Maybe<
            Array<
              Maybe<
                Pick<
                  ClarityCharacteristic,
                  "order" | "characteristic" | "image" | "location"
                >
              >
            >
          >;
        })
      | Pick<
          PearlIdentReportResults,
          | "report_title"
          | "item_description"
          | "weight"
          | "measurements"
          | "shape"
          | "bodycolor"
          | "overtone"
          | "identification"
          | "environment"
          | "mollusk"
          | "treatment"
          | "report_comments"
        >
      | Pick<
          NarrativeReportResults,
          | "report_title"
          | "description"
          | "conclusion"
          | "report_comments"
          | "inscriptions"
        >
      | {
          packages: Maybe<
            Array<
              Maybe<
                Pick<
                  MeleeServicePackage,
                  | "service_results_number"
                  | "issue_date"
                  | "melee_shape"
                  | "diameter"
                  | "total_carat_weight"
                  | "color_range"
                  | "number_of_items"
                  | "material_test_results"
                  | "comments"
                >
              >
            >
          >;
        }
  >;
  links: Maybe<
    Pick<
      Links,
      | "pdf"
      | "proportions_diagram"
      | "plotting_diagram"
      | "image"
      | "rough_image"
      | "rough_video"
      | "polished_image"
      | "polished_video"
    >
  >;
};
export const resultFieldsFragmentDoc = gql`
  fragment resultFields on GradingReport {
    report_date
    report_date_iso
    report_number
    report_type
    report_type_code
    is_digital
    info_message
    quota {
      remaining
    }
    results {
      __typename
      ... on IdentificationReportResults {
        weight
        measurements
        shape
        cutting_style
        cutting_style_crown
        cutting_style_pavilion
        transparency
        color
        phenomenon
        item_description
        species
        variety
        geographic_origin
        treatment
        report_comments
      }
      ... on DiamondGradingReportResults {
        shape_and_cutting_style
        measurements
        carat_weight
        color_grade
        color_origin
        color_distribution
        clarity_grade
        cut_grade
        polish
        symmetry
        fluorescence
        country_of_origin
        clarity_characteristics
        key_to_symbols {
          order
          characteristic
          location
          image
        }
        inscriptions
        report_comments
        proportions {
          depth_pct
          table_pct
          crown_angle
          crown_height
          pavilion_angle
          pavilion_depth
          star_length
          lower_half
          girdle
          culet
        }
        data {
          shape {
            shape_category
            shape_code
            shape_group
            shape_group_code
          }
          measurements {
            ... on FancyMeasurements {
              length
              width
              depth
            }
            ... on RoundMeasurements {
              min_diam
              max_diam
              depth
            }
          }
          weight {
            weight
            weight_unit
          }
          color {
            color_grade_code
            color_modifier
          }
          clarity
          cut
          polish
          symmetry
          fluorescence {
            fluorescence_color
            fluorescence_intensity
          }
          girdle {
            girdle_condition
            girdle_pct
            girdle_size
          }
          inscription_graphics {
            description
            image
          }
        }
      }
      ... on LabGrownDiamondGradingReportResults {
        identification
        shape_and_cutting_style
        measurements
        carat_weight
        color_grade
        color_origin
        color_distribution
        clarity_grade
        cut_grade
        polish
        symmetry
        fluorescence
        key_to_symbols {
          order
          characteristic
          image
          location
        }
        inscriptions
        report_comments
      }
      ... on PearlIdentReportResults {
        report_title
        item_description
        weight
        measurements
        shape
        bodycolor
        overtone
        identification
        environment
        mollusk
        treatment
        report_comments
      }
      ... on NarrativeReportResults {
        report_title
        description
        conclusion
        report_comments
        inscriptions
      }
      ... on MeleeServiceResults {
        packages {
          service_results_number
          issue_date
          melee_shape
          diameter
          total_carat_weight
          color_range
          number_of_items
          material_test_results
          comments
        }
      }
    }
    links {
      pdf
      proportions_diagram
      plotting_diagram
      image
      rough_image
      rough_video
      polished_image
      polished_video
    }
  }
`;
export const Get_ReportDocument = gql`
  query GET_REPORT($report_number: String!) {
    getReport(report_number: $report_number) {
      ...resultFields
    }
  }
  ${resultFieldsFragmentDoc}
`;
export type Get_ReportComponentProps = Omit<
  ReactApollo.QueryProps<Get_ReportQuery, Get_ReportQueryVariables>,
  "query"
> &
  ({ variables: Get_ReportQueryVariables; skip?: false } | { skip: true });

export const Get_ReportComponent = (props: Get_ReportComponentProps) => (
  <ReactApollo.Query<Get_ReportQuery, Get_ReportQueryVariables>
    query={Get_ReportDocument}
    {...props}
  />
);

export type Get_ReportProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<Get_ReportQuery, Get_ReportQueryVariables>
> &
  TChildProps;
export function withGet_Report<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    Get_ReportQuery,
    Get_ReportQueryVariables,
    Get_ReportProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    Get_ReportQuery,
    Get_ReportQueryVariables,
    Get_ReportProps<TChildProps>
  >(Get_ReportDocument, {
    alias: "withGet_Report",
    ...operationOptions
  });
}
