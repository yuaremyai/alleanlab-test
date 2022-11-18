import React from "react";
import { IJob } from "../../types/types";

interface Props {
  job: IJob
}

function DetailsDescription({ job }: Props) {
  const textBlocks: string[][] = job.description.split("\n  \n").map((value) => {
    return value.split("\n");
  });

  function renderList(text: string, index: number) {
    return (
      <ul key={index} className="list-square mt-2 marker:text-marker">
        {text
          .split(".")
          .filter((e) => e)
          .map((listItem, index) => {
            return <li key={index}>{listItem}</li>;
          })
        }
      </ul>
    );
  }

  return (
    <div className="text-primary mb-4">
      {textBlocks.map((block) => {
        return block.map((content, index) => {
          if (content.startsWith("\t")) {
            return renderList(content, index)
          }
          if (!content) return null;
          return (
            <p className={index === 0 ? "font-bold mt-4" : "my-2"} key={index}>
              {content}
            </p>
          );
        });
      })}
    </div>
  );
}

export default DetailsDescription;
