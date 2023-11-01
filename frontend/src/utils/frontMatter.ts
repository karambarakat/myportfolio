import type { ProjectMetaFragment } from "~/gql/graphql";
import type { FrontMatter } from "~/routes/projects/(page)/data";

export const projectCast = function (input: FrontMatter) {
  return {
    ...input,
    displayPicture:
      typeof input.displayPicture === "undefined"
        ? undefined
        : {
            data: {
              attributes: {
                url: input.displayPicture,
              },
            },
          },
    skills:
      typeof input.skills === "undefined"
        ? undefined
        : {
            data: input.skills.map((s) => ({ attributes: { title: s } })),
          },
  } as ProjectMetaFragment;
};
