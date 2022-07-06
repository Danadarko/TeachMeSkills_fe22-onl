import { baseUrl } from "../../../api/config";
import { Post } from "../../../types/post";
import { SortEnum } from "../../pages/all-posts-page/SortEnum";

export namespace FetchPostsApi {
  export async function fetchAllPosts(params: {
    text: SortEnum;
    limit: number;
    offset: number;
  }): Promise<Post[]> {
    try {
      const result = await fetch(
        `${baseUrl}blog/posts/?limit=${params.limit}&offset=${params.offset}&ordering=${params.text}`
      );
      const { results } = await result.json();
      if (!result.ok) {
        const errorText = await result.text();
        throw new Error(errorText);
      }
      return results;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
