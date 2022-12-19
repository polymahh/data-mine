import { Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { isTemplateExpression } from "typescript";
import ZoomHead from "./ZoomHead";
import ZoomRow from "./ZoomRow";

const attributes = [
  {
    sourceAttribute: "Main attribute",
    prifinaAttribute: "Prifina Attribute",
    Aggregate: "Mean = Values  ",
    dataCategory: "Health",
  },
  {
    sourceAttribute: "Main attribute",
    prifinaAttribute: "Prifina Attribute",
    Aggregate: "Mean = Values  ",
    dataCategory: "Health",
  },
  {
    sourceAttribute: "Main attribute",
    prifinaAttribute: "Prifina Attribute",
    Aggregate: "Mean = Values  ",
    dataCategory: "Health",
  },
  {
    sourceAttribute: "Main attribute",
    prifinaAttribute: "Prifina Attribute",
    Aggregate: "Mean = Values  ",
    dataCategory: "Health",
  },
  {
    sourceAttribute: "Main attribute",
    prifinaAttribute: "Prifina Attribute",
    Aggregate: "Mean = Values  ",
    dataCategory: "Sleep",
  },
  {
    sourceAttribute: "Main attribute",
    prifinaAttribute: "Prifina Attribute",
    Aggregate: "Mean = Values  ",
    dataCategory: "Sleep",
  },
  {
    sourceAttribute: "Main attribute",
    prifinaAttribute: "Prifina Attribute",
    Aggregate: "Mean = Values  ",
    dataCategory: "Sleep",
  },
  {
    sourceAttribute: "Main attribute",
    prifinaAttribute: "Prifina Attribute",
    Aggregate: "Mean = Values  ",
    dataCategory: "Sleep",
  },
  {
    sourceAttribute: "Main attribute",
    prifinaAttribute: "Prifina Attribute",
    Aggregate: "Mean = Values  ",
    dataCategory: "Sleep",
  },
  {
    sourceAttribute: "Main attribute",
    prifinaAttribute: "Prifina Attribute",
    Aggregate: "Mean = Values  ",
    dataCategory: "Sleep",
  },
  {
    sourceAttribute: "Main attribute",
    prifinaAttribute: "Prifina Attribute",
    Aggregate: "Mean = Values  ",
    dataCategory: "Sleep",
  },
];

interface Props {
  attributes: any;
  filtred: any;
}

export const ZoomTable = ({ attributes, filtred }: Props) => {
  const [zoomAttributes, setZoomAttributes] = useState(null);
  const [rows, setRows] = useState(10);
  const [startRange, setStartRange] = useState(1);
  const [endRange, setEndRange] = useState(rows);
  const [attributesRange, setAttributesRange] = useState<any[]>([]);

  const getAttributes = () => {
    return filtred.dataObjectsNames.formula.string
      .split(",")
      .map((item: string, idx: number) => {
        return {
          objectName: item,
          Objectid: filtred["Data Objects (All)"].relation[idx].id,
          att: attributes.filter((item: any) =>
            item.properties["Object(s) using this"].relation.find(
              (obj: any) =>
                obj.id === filtred["Data Objects (All)"].relation[idx].id
            )
          ),
        };
      });
  };

  useEffect(() => {
    const arr = attributes.slice(startRange - 1, endRange);
    setAttributesRange(arr);
  }, [rows, startRange]);

  useEffect(() => {
    setStartRange(1);
    setEndRange(rows);
    const arr = attributes.slice(0, rows);
    setAttributesRange(arr);
    console.log(getAttributes());
  }, [attributes]);

  return (
    <Grid
      gridTemplateColumns={{
        base: "1fr 1fr",
        lg: "1fr 1fr minmax(auto, 540px) 1fr",
      }}
      width={"full"}
      bg={"bgItemD"}
      fontSize={"12px"}
      shadow={"xs"}
    >
      <ZoomHead />
      {attributesRange.map((attribute) => (
        <ZoomRow attribute={attribute} />
      ))}
    </Grid>
  );
};
