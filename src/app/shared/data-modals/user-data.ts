export class userDataModel {
    public name: string;
    public avatar: string;
    public id: string;
    public recentPosts: any[];
    public totalPosts: number;
  
    constructor(name: string, avatar: string, id: string, recentPosts: any[]) {
      this.name = name;
      this.avatar = avatar;
      this.id = id;
      this.recentPosts = recentPosts;
      this.totalPosts = recentPosts.length
    }
  }