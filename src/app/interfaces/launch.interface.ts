/**
 * @author: Jam Furaque
 * See, it's only just the interface.
 * I planned to add more but why? Daaaaang that's crazyyyyy
 */
export interface Launch {
    flight_number: number;
    mission_name: string;
    launch_year: string;
    details: string;
    launch_success: boolean | null;
  
    rocket: {
      rocket_name: string;
      rocket_type: string;
      first_stage?: {
        cores?: {
          land_success: boolean | null;
        }[];
      };
    };
  
    links: {
      mission_patch_small: string;
      article_link: string;
      wikipedia: string;
      video_link: string;
    };
  }
  