import React from "react";
import InfoBox from "../../components/infoBox/InfoBox";
import { GrGroup } from "react-icons/gr";
import { LuUserCheck2 } from "react-icons/lu";
import { MdOutlinePersonRemoveAlt1 } from "react-icons/md";
import { TbRowRemove } from "react-icons/tb";
import { TbUserCancel } from "react-icons/tb";

const allUsersIcon = <GrGroup size={50} />;
const verifiedUserIcon = <LuUserCheck2 size={50} />;
const UnverifiedUserIcon = <MdOutlinePersonRemoveAlt1 size={50} />;
const SuspendedUserIcon = <TbUserCancel size={50} />;

const UserStats = () => {
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-between">
        <InfoBox
          icon={allUsersIcon}
          title="Total User"
          count={"3"}
          bgColor="bg-info"
        />

        <InfoBox
          icon={verifiedUserIcon}
          title="Verified User"
          count={"5"}
          bgColor="bg-success"
        />

        <InfoBox
          icon={UnverifiedUserIcon}
          title="Unverified Users"
          count={"3"}
          bgColor="bg-warning"
        />

        <InfoBox
          icon={SuspendedUserIcon}
          title="Suspended Users"
          count={"10"}
          bgColor="bg-danger"
        />
      </div>
    </div>
  );
};

export default UserStats;
