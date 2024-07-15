"use client";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import classes from "./SearchFilter.module.scss";

interface FilterState {
  [key: string]: string;
}

const initalRadio = {
  userFilter: "all",
  location: "anyway",
};

const radioGroup = [
  {
    title: "사용자",
    groupName: "userFilter",
    label: [
      { value: "all", labelName: "모든 사용자" },
      { value: "flow", labelName: "내가 팔로우하는 사람들" },
    ],
  },
  {
    title: "위치",
    groupName: "location",
    label: [
      { value: "anyway", labelName: "어디에서나 " },
      { value: "thisArea", labelName: "현 위치 주변" },
    ],
  },
];

export default function SearchFilter() {
  const [filter, setFilter] = useState<FilterState>(initalRadio);

  const handleChange: ChangeEventHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className={classes.FilterTitle}>검색 필터</div>
      <div className={classes.boxWrapper}>
        {radioGroup.map((radioGroup, idx) => {
          const labelGroup = radioGroup.groupName;

          return (
            <div className={classes.filterGroup} key={`radio-${idx}`}>
              <div className={classes.filterGroupTitle}>{radioGroup.title}</div>
              {radioGroup.label.map((e, idx) => {
                return (
                  <label key={`${e.value}-${idx}`} className={classes.label}>
                    {e.labelName}
                    <input
                      type="radio"
                      name={radioGroup.groupName}
                      value={e.value}
                      checked={filter[labelGroup] === e.value}
                      onChange={handleChange}
                    />
                  </label>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
