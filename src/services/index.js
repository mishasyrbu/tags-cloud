import tagsCloudData from '../tagsCloudData';

export const getAllTags = () => tagsCloudData;
export const getTagById = (tagId) => {
  const tags = getAllTags();

  return tags.find(({ id }) => id === tagId);
};
