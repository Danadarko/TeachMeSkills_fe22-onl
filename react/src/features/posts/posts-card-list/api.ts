import { baseUrl } from "../../../api/config";
import { Post } from "../../../types/post";

export namespace FetchPostsApi {
  export async function fetchAllPosts(): Promise<Post[]> {
    try {
      const result = await fetch(`${baseUrl}blog/posts/?limit=70`);
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
