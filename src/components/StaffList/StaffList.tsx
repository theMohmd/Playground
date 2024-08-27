import { useState } from "react";
import { StaffListElement } from "./StaffListElement";
const data = ["/s0.jpg", "/s1.jpg", "/s2.jpg", "/s3.jpg", "/s4.jpg"];
const StaffList = () => {
    const [index, setindex] = useState(0);
    return (
        <div className="overflow-hidden max-h-full flex gap-2 w-full aspect-[2]">
            {data.map((item, i) => (
                <StaffListElement
                    key={item}
                    src={item}
                    active={index === i}
                    onClick={() => {
                        setindex(i);
                    }}
                    i={i}
                />
            ))}
        </div>
    );
};

export default StaffList;
