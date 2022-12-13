import { Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import TableFooter from "./TableFooter";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import { useParams } from "react-router-dom";

// const attributes = [
//   {
//     sourceAttribute: "rmssd_5min",
//     prifinaAttribute: "HRV_5_rmssd",
//     attributeDescription:
//       "The average HRV (calculated using rMSSD method) for each beginning 5 minutes of the sleep period, the first period starting from sleep.bedtime_start.",
//     dataCategory: "Blogging",
//   },
//   {
//     sourceAttribute: "rmssd",
//     prifinaAttribute: "HRV_rmssd",
//     attributeDescription: "The average HRV calculated with rMSSD method.",
//     dataCategory: "Health",
//   },
//   {
//     sourceAttribute: "hypnogram_5min",
//     prifinaAttribute: "Hypno_5",
//     attributeDescription:
//       "that the first period starts from sleep.bedtime.start: - '1' = deep (N3) sleep - '2' = light (N1 or N2) sleep - '3' = REM sleep - '4' = awake",
//     dataCategory: "Calenders",
//   },
//   {
//     sourceAttribute: "score_alignment",
//     prifinaAttribute: "Ourascr_align",
//     attributeDescription:
//       "Represents circadian alignment's contribution for sleep score. Sleep midpoint time (sleep.midpoint_time) between 12PM and 3AM gives highest score. The more the midpoint time deviates from that range, the lower the score. (...)",
//     dataCategory: "Clocks",
//   },
//   {
//     sourceAttribute: "score_disturbances",
//     prifinaAttribute: "Ourascr_disturb",
//     attributeDescription:
//       "Represents sleep disturbances' contribution for sleep quality. Three separate measurements are used to calculate this contributor value",
//     dataCategory: "Cloud storage",
//   },
//   {
//     sourceAttribute: "score_latency",
//     prifinaAttribute: "Ourascr_lat",
//     attributeDescription:
//       "Represents sleep onset latency's (see sleep.onset_latency) contribution for sleep quality. A latency of about 15 minutes gives best score. Latency longer than that many indicate problems falling asleep, whereas a very short latency may be a sign of (...)",
//     dataCategory: "Location",
//   },
//   {
//     sourceAttribute: "score_efficiency",
//     prifinaAttribute: "Ourascr_eff",
//     attributeDescription:
//       "Represents sleep efficiency's (see sleep.efficiency) contribution for sleep quality. The higher efficiency, the higher score. The weight of sleep.score_efficiency in sleep score calculation is 0.10.",
//     dataCategory: "Entertainment",
//   },
//   {
//     sourceAttribute: "score_deep",
//     prifinaAttribute: "Ourascr_N3",
//     attributeDescription:
//       "Represents deep (N3) sleep time's (see sleep.deep) contribution for sleep quality. The value depends on age of the user - the younger, the more sleep is needed for good score. The weight of sleep.score_deep in sleep score calculation is 0.10.",
//     dataCategory: "Finance",
//   },
//   {
//     sourceAttribute: "score_total",
//     prifinaAttribute: "Ourascr_TOT",
//     attributeDescription:
//       "Represents total sleep time's (see sleep.total) contribution for sleep quality. The value depends on age of the user -(..)",
//     dataCategory: "Games",
//   },
//   {
//     sourceAttribute: "score_rem",
//     prifinaAttribute: "Ourascr_rem",
//     attributeDescription:
//       "Represents REM sleep time's (see sleep.rem) contribution for sleep quality. The value depends on age of the user - the younger, the more sleep REM is needed for (...)",
//     dataCategory: "Sleep",
//   },
//   {
//     sourceAttribute: "rmssd_5min",
//     prifinaAttribute: "HRV_5_rmssd",
//     attributeDescription:
//       "The average HRV (calculated using rMSSD method) for each beginning 5 minutes of the sleep period, the first period starting from sleep.bedtime_start.",
//     dataCategory: "Location and Navigation",
//   },
//   {
//     sourceAttribute: "rmssd",
//     prifinaAttribute: "HRV_rmssd",
//     attributeDescription: "The average HRV calculated with rMSSD method.",
//     dataCategory: "Security",
//   },
//   {
//     sourceAttribute: "rmssd_5min",
//     prifinaAttribute: "HRV_5_rmssd",
//     attributeDescription:
//       "The average HRV (calculated using rMSSD method) for each beginning 5 minutes of the sleep period, the first period starting from sleep.bedtime_start.",
//     dataCategory: "Smart Home",
//   },
//   {
//     sourceAttribute: "rmssd",
//     prifinaAttribute: "HRV_rmssd",
//     attributeDescription: "The average HRV calculated with rMSSD method.",
//     dataCategory: "Social Media",
//   },
//   {
//     sourceAttribute: "hypnogram_5min",
//     prifinaAttribute: "Hypno_5",
//     attributeDescription:
//       "that the first period starts from sleep.bedtime.start: - '1' = deep (N3) sleep - '2' = light (N1 or N2) sleep - '3' = REM sleep - '4' = awake",
//     dataCategory: "Travel",
//   },
//   {
//     sourceAttribute: "score_alignment",
//     prifinaAttribute: "Ourascr_align",
//     attributeDescription:
//       "Represents circadian alignment's contribution for sleep score. Sleep midpoint time (sleep.midpoint_time) between 12PM and 3AM gives highest score. The more the midpoint time deviates from that range, the lower the score. (...)",
//     dataCategory: "Communication",
//   },
//   {
//     sourceAttribute: "score_disturbances",
//     prifinaAttribute: "Ourascr_disturb",
//     attributeDescription:
//       "Represents sleep disturbances' contribution for sleep quality. Three separate measurements are used to calculate this contributor value",
//     dataCategory: "Sleep",
//   },
//   {
//     sourceAttribute: "score_latency",
//     prifinaAttribute: "Ourascr_lat",
//     attributeDescription:
//       "Represents sleep onset latency's (see sleep.onset_latency) contribution for sleep quality. A latency of about 15 minutes gives best score. Latency longer than that many indicate problems falling asleep, whereas a very short latency may be a sign of (...)",
//     dataCategory: "Sleep",
//   },
//   {
//     sourceAttribute: "score_efficiency",
//     prifinaAttribute: "Ourascr_eff",
//     attributeDescription:
//       "Represents sleep efficiency's (see sleep.efficiency) contribution for sleep quality. The higher efficiency, the higher score. The weight of sleep.score_efficiency in sleep score calculation is 0.10.",
//     dataCategory: "Sleep",
//   },
//   {
//     sourceAttribute: "score_deep",
//     prifinaAttribute: "Ourascr_N3",
//     attributeDescription:
//       "Represents deep (N3) sleep time's (see sleep.deep) contribution for sleep quality. The value depends on age of the user - the younger, the more sleep is needed for good score. The weight of sleep.score_deep in sleep score calculation is 0.10.",
//     dataCategory: "Sleep",
//   },
//   {
//     sourceAttribute: "score_total",
//     prifinaAttribute: "Ourascr_TOT",
//     attributeDescription:
//       "Represents total sleep time's (see sleep.total) contribution for sleep quality. The value depends on age of the user -(..)",
//     dataCategory: "Sleep",
//   },
//   {
//     sourceAttribute: "score_rem",
//     prifinaAttribute: "Ourascr_rem",
//     attributeDescription:
//       "Represents REM sleep time's (see sleep.rem) contribution for sleep quality. The value depends on age of the user - the younger, the more sleep REM is needed for (...)",
//     dataCategory: "Sleep",
//   },
//   {
//     sourceAttribute: "rmssd_5min",
//     prifinaAttribute: "HRV_5_rmssd",
//     attributeDescription:
//       "The average HRV (calculated using rMSSD method) for each beginning 5 minutes of the sleep period, the first period starting from sleep.bedtime_start.",
//     dataCategory: "Health",
//   },
//   {
//     sourceAttribute: "rmssd",
//     prifinaAttribute: "HRV_rmssd",
//     attributeDescription: "The average HRV calculated with rMSSD method.",
//     dataCategory: "Health",
//   },
//   {
//     sourceAttribute: "hypnogram_5min",
//     prifinaAttribute: "Hypno_5",
//     attributeDescription:
//       "that the first period starts from sleep.bedtime.start: - '1' = deep (N3) sleep - '2' = light (N1 or N2) sleep - '3' = REM sleep - '4' = awake",
//     dataCategory: "Sleep",
//   },
//   {
//     sourceAttribute: "score_alignment",
//     prifinaAttribute: "Ourascr_align",
//     attributeDescription:
//       "Represents circadian alignment's contribution for sleep score. Sleep midpoint time (sleep.midpoint_time) between 12PM and 3AM gives highest score. The more the midpoint time deviates from that range, the lower the score. (...)",
//     dataCategory: "Sleep",
//   },
//   {
//     sourceAttribute: "score_disturbances",
//     prifinaAttribute: "Ourascr_disturb",
//     attributeDescription:
//       "Represents sleep disturbances' contribution for sleep quality. Three separate measurements are used to calculate this contributor value",
//     dataCategory: "Sleep",
//   },
//   {
//     sourceAttribute: "score_latency",
//     prifinaAttribute: "Ourascr_lat",
//     attributeDescription:
//       "Represents sleep onset latency's (see sleep.onset_latency) contribution for sleep quality. A latency of about 15 minutes gives best score. Latency longer than that many indicate problems falling asleep, whereas a very short latency may be a sign of (...)",
//     dataCategory: "Sleep",
//   },
//   {
//     sourceAttribute: "score_efficiency",
//     prifinaAttribute: "Ourascr_eff",
//     attributeDescription:
//       "Represents sleep efficiency's (see sleep.efficiency) contribution for sleep quality. The higher efficiency, the higher score. The weight of sleep.score_efficiency in sleep score calculation is 0.10.",
//     dataCategory: "Sleep",
//   },
//   {
//     sourceAttribute: "score_deep",
//     prifinaAttribute: "Ourascr_N3",
//     attributeDescription:
//       "Represents deep (N3) sleep time's (see sleep.deep) contribution for sleep quality. The value depends on age of the user - the younger, the more sleep is needed for good score. The weight of sleep.score_deep in sleep score calculation is 0.10.",
//     dataCategory: "Sleep",
//   },
//   {
//     sourceAttribute: "score_total",
//     prifinaAttribute: "Ourascr_TOT",
//     attributeDescription:
//       "Represents total sleep time's (see sleep.total) contribution for sleep quality. The value depends on age of the user -(..)",
//     dataCategory: "Sleep",
//   },
//   {
//     sourceAttribute: "score_rem",
//     prifinaAttribute: "Ourascr_rem",
//     attributeDescription:
//       "Represents REM sleep time's (see sleep.rem) contribution for sleep quality. The value depends on age of the user - the younger, the more sleep REM is needed for (...)",
//     dataCategory: "Sleep",
//   },
// ];

interface Props {
  attributes: any;
}

export const AttributesTable = ({ attributes }: Props) => {
  const [rows, setRows] = useState(10);
  const [startRange, setStartRange] = useState(1);
  const [endRange, setEndRange] = useState(rows);
  const [attributesRange, setAttributesRange] = useState<any[]>([]);

  console.log(attributes);

  const param = useParams();

  useEffect(() => {
    const arr = attributes.slice(startRange - 1, endRange);
    setAttributesRange(arr);
  }, [rows, startRange]);

  useEffect(() => {
    setStartRange(1);
    setEndRange(rows);
    const arr = attributes.slice(0, rows);
    setAttributesRange(arr);
  }, [param.name]);

  return (
    <Grid
      gridTemplateColumns={{
        base: "1fr 1fr",
        lg: "1fr 1fr minmax(auto, 540px) 1fr",
      }}
      width={"full"}
      bg={"bgItemD"}
      fontSize={"12px"}
    >
      <TableHead />
      {attributesRange.map((attribute) => (
        <TableRow attribute={attribute} />
      ))}
      <TableFooter
        rows={rows}
        setRows={setRows}
        startRange={startRange}
        setStartRange={setStartRange}
        endRange={endRange}
        setEndRange={setEndRange}
        attributes={attributes}
      />
    </Grid>
  );
};
