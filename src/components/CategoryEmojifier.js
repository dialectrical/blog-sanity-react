import { React, useState, useEffect } from "react";

export const Emojify = category => {
  if (category) {
    let { title } = category;
    if (title === "testcase") {
      return "📝";
    } else {
      return "woops";
    }
  } else {
    return "📄";
  }
};

export default Emojify;
