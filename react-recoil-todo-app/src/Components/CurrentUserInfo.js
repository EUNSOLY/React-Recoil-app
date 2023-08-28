import React from "react";
import { useRecoilValue } from "recoil";
import { currentUserNameQuery } from "../userAtoms";

const CurrentUserInfo = () => {
  const userName = useRecoilValue(currentUserNameQuery);
  return <div>{userName}</div>;
};

export default CurrentUserInfo;
