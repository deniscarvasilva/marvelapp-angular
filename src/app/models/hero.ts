export class Hero {

    id: number;
    name: string;
    description: string;
    thumbnail: Image;
    resourceURI: string;
    comics: Arrival;
    series: Arrival;
    stories: Arrival;
    events: Arrival;
    urls: URLHero[];
  
  
    constructor(
      id: number,
      name: string,
      description: string,
      thumbnail: Image,
      resourceURI: string,
      comics: Arrival,
      series: Arrival,
      stories: Arrival,
      events: Arrival,
      urls: URLHero[]
    ) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.thumbnail = thumbnail;
      this.resourceURI = resourceURI;
      this.comics = comics;
      this.series = series;
      this.stories = stories;
      this.events = events;
      this.urls = urls;
  
    }
  }
  
  interface Image {
    path: string;
    extension: string;
  }
  interface Arrival {
    available: number;
    collectionURI: string;
    items: Items[];
    returned: number;
  }
  interface Items {
    resourceURI: string;
    name: string;
    type?: string;
  }
  interface URLHero {
    type: string;
    url: string;
  }