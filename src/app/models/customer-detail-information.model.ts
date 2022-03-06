export class CustomerDetailInformationModel{
   
    id: number | undefined;

    hotel_id: number |undefined;

    first_name: string="";

    last_name:  string="";

    profile_pic_url: string="";
  
    locale: string="";

    room_no: number=0;

    entry_date: Date | undefined;

    release_date: Date | undefined;

    phone_no: string="";

    booking_date:Date | undefined;

    date_of_birth: Date | undefined;

    e_mail: string="";

    wedding_anniversary: Date | undefined;
    
    loyalty_info: {

        points_earned: number;

        points_spend: number;

        remaining_point: number;

        overnight_stay: number;

        target_night_stay: number;

        earned_night_stay: number;

        room_type: string;

        menu_item_id: number;

    };

    pillow_type: "Soft";

    bed_type: "Hard";
}