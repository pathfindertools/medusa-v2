import * as React from "react";
import { Section } from "../section";
import { backgroundSchema } from "../../schema/background";
import { navigationLabelSchema } from "../../schema/navigation-label";

export const Timeline = ({ data, parentField = "" }) => {
  const padding = data.style?.padding

  return (
    <Section
      background={data.background}
      navigationLabel={data.navigationLabel}
    >
      <div className={`relative w-full max-w-site-full mx-auto ${padding}`}>
        <div className="relative w-full py-8 px-3">
          <div className={`absolute top-0 left-3 right-3 h-1 bg-accent1`}></div>
          <div className="flex justify-between">
            {data.events?.map((event) => {
              return (
                <div className="relative w-1">
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-accent1 rounded-full"></div>
                  <div className={`absolute transform -translate-x-1/2 w-28 text-center ${data.style?.timelineStyles}`}>{event}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

export const timelineBlockSchema: any = {
  label: "Timeline",
  name: "timeline",
  fields: [
    {
      label: "Section Style",
      name: "style",
      type: "object",
      fields: [
        {
          label: "Padding",
          name: "padding",
          type: "string",
          ui: {
            component: "paddingControl",
          }
        },
        {
          label: "Typography",
          name: "typographyTitle",
          type: "string",
          ui: {
            component: "ruledTitle",
          },
        },
        {
          type: "string",
          label: "Headline",
          name: "headlineStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Timeline",
          name: "timelineStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Text",
          name: "textStyles",
          ui: {
            component: "typeControl"
          }
        }
      ],
    },
    backgroundSchema,
    {
      label: "Events",
      name: "events",
      type: "string",
      list: true,
    },
    navigationLabelSchema,
  ],
};