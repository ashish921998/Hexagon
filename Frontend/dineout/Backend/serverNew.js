const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const dotenv = require("dotenv");
dotenv.config();

const connect = () => {
  return mongoose.connect(process.env.BACKEND_DATABASE_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
};

const restaurantSchema = new mongoose.Schema(
  {
    resturant_name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    timings: {
      type: String,
      required: true,
    },
    dineoutPay: {
      type: Boolean,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    average_cost: {
      type: Number,
      required: true,
    },
    menu_images: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    free_offer: {
      type: [{}],
      required: true,
    },
    girfs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "girf",
        required: false,
      },
    ],
    cuisines: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cuisine",
        required: true,
      },
    ],
    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tag",
        required: true,
      },
    ],
    features: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "feature",
        required: true,
      },
    ],
    dineoutpassport: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "dineoutpassport",
        required: false,
      },
    ],
  },
  { versionKey: false }
);

const Restaurant = mongoose.model("restaurant", restaurantSchema);

app.post("/restaurants", async (req, res) => {
  const data = await Restaurant.create(req.body);
  res.status(200).json({ data: data });
});
app.get("/restaurants", async (req, res) => {
  const datas = await Restaurant.find({})
    .populate("girfs")
    .populate("cuisines")
    .populate("tags")
    .populate("dineoutpassport")
    .populate("features")
    .lean()
    .exec();
  res.status(200).json({ data: datas });
});
app.patch("/restaurants/:id", async (req, res) => {
  const data = await Restaurant.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .populate("girfs")
    .populate("cuisines")
    .populate("tags")
    .populate("dineoutpassport")
    .populate("features")
    .lean()
    .exec();
  res.status(200).json({ data: data });
});
const girfSchema = new mongoose.Schema({
  icon: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  info: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});
const Girf = mongoose.model("girf", girfSchema);
app.post("/girfs", async (req, res) => {
  const data = await Girf.create(req.body);
  res.status(200).json({ data: data });
});
app.get("/girfs", async (req, res) => {
  const datas = await Girf.find({}).lean().exec();
  res.status(200).json({ data: datas });
});
const cuisineSchema = new mongoose.Schema({
  cuisine: {
    type: String,
    required: true,
  },
});
const Cuisine = mongoose.model("cuisine", cuisineSchema);
app.post("/cuisines", async (req, res) => {
  const data = await Cuisine.create(req.body);
  res.status(200).json({ data: data });
});
app.get("/cuisines", async (req, res) => {
  const datas = await Cuisine.find({}).lean().exec();
  res.status(200).json({ data: datas });
});

const tagSchema = new mongoose.Schema({
  tag: {
    type: String,
    required: true,
  },
});
const Tag = mongoose.model("tag", tagSchema);
app.post("/tags", async (req, res) => {
  const data = await Tag.create(req.body);
  res.status(200).json({ data: data });
});
app.get("/tags", async (req, res) => {
  const datas = await Tag.find({}).lean().exec();
  res.status(200).json({ data: datas });
});

const featureSchema = new mongoose.Schema({
  feature: {
    type: String,
    required: true,
  },
  featureIcon: {
    type: String,
    required: true,
  },
});
const Feature = mongoose.model("feature", featureSchema);
app.post("/features", async (req, res) => {
  const data = await Feature.create(req.body);
  res.status(200).json({ data: data });
});
app.get("/features", async (req, res) => {
  const datas = await Feature.find({}).lean().exec();
  res.status(200).json({ data: datas });
});
const dineoutpassportSchema = new mongoose.Schema({
  dineoutpassport: {
    type: String,
    required: true,
  },
});
const Dineoutpassport = mongoose.model(
  "dineoutpassport",
  dineoutpassportSchema
);

app.post("/dineoutpassports", async (req, res) => {
  const data = await Dineoutpassport.create(req.body);
  res.status(200).json({ data: data });
});
app.get("/dineoutpassports", async (req, res) => {
  const datas = await Dineoutpassport.find({}).lean().exec();
  res.status(200).json({ data: datas });
});

app.post("/filters", async (req, res) => {
  let queryObj = [];
  Object.keys(req.body).map((key) => {
    if (req.body[key].length > 0) {
      let queryArray = [];
      for (let i = 0; i < req.body[key].length; i++) {
        queryArray.push({ [key]: req.body[key][i] });
      }
      let queryOrObject = { $or: queryArray };
      queryObj.push(queryOrObject);
    }
  });
  const datas = await Restaurant.find({
    $and: queryObj,
  })
    .populate("girfs")
    .populate("cuisines")
    .populate("tags")
    .populate("dineoutpassport")
    .populate("features")
    .lean()
    .exec();
  res.status(200).json({ data: datas });
});
//sorting
app.post("/sorting", async (req, res) => {
  console.log(req.body["x"]);
  if (req.body["x"] === "Price :Low to High") {
    const datas = await Restaurant.find({})
      .sort({ average_cost: 1 })
      .populate("girfs")
      .populate("cuisines")
      .populate("tags")
      .populate("dineoutpassport")
      .populate("features")
      .lean()
      .exec();
    res.status(200).json({ data: datas });
  } else if (req.body["x"] === "Price :High to Low") {
    const datas = await Restaurant.find({})
      .sort({ average_cost: -1 })
      .populate("girfs")
      .populate("cuisines")
      .populate("tags")
      .populate("dineoutpassport")
      .populate("features")
      .lean()
      .exec();
    res.status(200).json({ data: datas });
  } else if (req.body["x"] === "Rating") {
    const datas = await Restaurant.find({})
      .sort({ rating: -1 })
      .populate("girfs")
      .populate("cuisines")
      .populate("tags")
      .populate("dineoutpassport")
      .populate("features")
      .lean()
      .exec();
    res.status(200).json({ data: datas });
  } else if (req.body["x"] === "none") {
    const datas = await Restaurant.find({})
      .populate("girfs")
      .populate("cuisines")
      .populate("tags")
      .populate("dineoutpassport")
      .populate("features")
      .lean()
      .exec();
    res.status(200).json({ data: datas });
  }
});
//google
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  googleId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});
const User = mongoose.model("user", userSchema);
app.post("/users", async (req, res) => {
  console.log(req.body["googleId"]);
  let check = req.body["googleId"];
  let data1 = await User.find({ googleId: { $eq: check } })
    .lean()
    .exec();
  if (data1.length === 0) {
    const data = await User.create(req.body);
    res.status(200).json({ data: data });
  } else {
    res.status(200).send("no need");
  }
});
app.get("/users", async (req, res) => {
  const data = await User.find({}).lean().exec();
  res.status(200).json({ data: data });
});

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  restaurantname: [
    {
      type: String,
      required: true,
    },
  ],
  timings: {
    type: [],
    required: true,
  },
  guest: {
    type: Number,
    required: true,
  },
  specialRequest: {
    type: String,
    required: false,
  },
  mobile: {
    type: String,
    required: false,
  },
});

const Booking = mongoose.model("booking", bookingSchema);

app.post("/booking", async (req, res) => {
  console.log(req.body);
  const booking = await Booking.create(req.body);

  res.status(201).json({ data: booking });
});

app.get("/booking", async (req, res) => {
  const bookings = await Booking.find({})
    .populate("restaurant")
    .populate("user")
    .lean()
    .exec();
  console.log(bookings);
  res.status(200).json({ data: bookings });
});

async function start() {
  await connect();
  app.listen(6878, () => {
    console.log("Listening on port 6878");
  });
}

start();
