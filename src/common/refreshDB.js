import axios from "axios";
import {
  createNewMapPoint,
  deleteAllPoints,
} from "../controllers/mappoints.js";

/** Немного замудрённо и закинуто всё в одну кашу, лучше не читать) */

const getRandomNamesAPI = async () => {
  let names = null;
  await axios.get("http://names.drycodes.com/100").then((res) => {
    const data = res.data;
    if (data) {
      names = data;
    }
  });
  return names;
};

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomNames = () => {
  /** Generates names from api */
  let names = [
    "Flowers_Dislike",
    "Bird_Shelf",
    "Ring_Monster",
    "Shoe_Nuclear",
    "Post_office_Body",
    "BBQ_Body",
    "Leash_Fence",
    "Boat_System",
    "Comics_Dog",
    "Ice_cream_BBQ",
    "Trees_Soap",
    "Elevator_Male",
    "Male_Breakfast",
    "Floppy_Disk_Poop",
    "Horse_Ring",
    "Shoes_Nuclear",
    "Water_Poop",
    "Drugs_Soap",
    "Crab_Robot",
    "Toilet_Laptop",
    "Light_saber_Toolbox",
    "Nuclear_Laptop",
    "Toolbox_Drugs",
    "Hnads_Fusion",
    "Water_Water",
    "Fence_Puppy",
    "Shelf_Floppy_Disk",
    "Ice_cream_cone_Shelf",
    "Towel_Rollers",
    "Ring_Robot",
    "Male_Monster",
    "Elevator_BBQ",
    "Robot_Fusion",
    "Plus_Floppy_Disk",
    "Plus_Cone",
    "Website_Printer",
    "Whale_Fence",
    "Rollers_BBQ",
    "Running_Hnads",
    "Floppy_Disk_Towel",
    "Ice_cream_Shoes",
    "Monster_Elevator",
    "Ice_cream_cone_Rollers",
    "Crab_Crab",
    "Prints_Towel",
    "YouTube_Body",
    "Cone_YouTube",
    "Toolbox_Drugs",
    "Shower_Printer",
    "Light_saber_Male",
    "Kitty_Male",
    "Toilet_Plus",
    "Monster_Monster",
    "Sink_Floppy_Disk",
    "Book_Website",
    "Book_Leash",
    "Websites_Plus",
    "Leash_Comics",
    "Prints_BBQ",
    "System_Ice_cream_cone",
    "Ice_cream_Urine",
    "Shelf_Plus",
    "Urine_Mail",
    "Bird_Floppy_Disk",
    "Drugs_Fence",
    "Cone_Ring",
    "Website_Post_office",
    "Clock_Android",
    "Ice_cream_Settings",
    "Soda_Shelf",
    "Urine_Ice_cream_cone",
    "Ring_Male",
    "Dislike_Solar",
    "Ice_cream_Whale",
    "Shoes_Dislike",
    "Crab_Soda",
    "Leash_Whale",
    "Book_Plus",
    "Book_Horse",
    "Dislike_Flowers",
    "Fusion_Printer",
    "Crab_Breakfast",
    "Boat_Video_games",
    "Robot_Video_games",
    "Drugs_Book",
    "Plants_Plants",
    "Crab_Dislike",
    "Running_Shower",
    "Leash_Allergies",
    "Cone_Shoe",
    "Website_Male",
    "Plus_Cat",
    "Book_Android",
    "Leash_Plants",
    "Towel_Crab",
    "Trees_Towel",
    "Printer_Printer",
    "Dog_Body",
    "Boat_Floppy_Disk",
    "Cone_Light_saber",
  ];
  return names;
};

const setNewPoints = async () => {
  let randNames = (await getRandomNamesAPI()) || getRandomNames();
  let isSuccess = true;

  for (let i = 0; i < 100; i++) {
    const point = {
      name: randNames[i].split("_")[0],
      count: getRandomNumber(0, 10000),
      distance: getRandomNumber(0, 10000),
    };
    const isAdd = await createNewMapPoint(point);
    isSuccess = isAdd && isSuccess;
  }
  return isSuccess;
};

(async function () {
  const isDeleted = await deleteAllPoints();
  setNewPoints().then(
    () =>
      (isDeleted && console.log("Complited")) ||
      (!isDeleted && console.log("Error: Could not delete old data"))
  );
})();
