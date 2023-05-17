import React, { useState } from "react";
import './style.scss'
interface Props {
  familyTree: any
}
export default function Family({ familyTree }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const expand = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ paddingLeft: 10 }}>
      <li className="parent" onClick={expand}>{familyTree.name}{familyTree.age}</li>
      {isVisible ? (familyTree?.children?.map((child: any) => {
        return (
          <div className="child">
            <Family familyTree={child} />
          </div>
        );
      })
      ) :
        (
          <></>
        )
      }
    </div>
  );
}