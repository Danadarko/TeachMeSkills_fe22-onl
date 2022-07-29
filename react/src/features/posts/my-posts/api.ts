import { baseUrl } from "../../../api/config";
import { Post } from "../../../types/post";

export namespace FetchMyPostsApi {
  export async function fetchMyPosts(): Promise<Post[]> {
    try {
      const result = await fetch(`${baseUrl}blog/posts/my_posts/`);
      const results = await result.json();
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
