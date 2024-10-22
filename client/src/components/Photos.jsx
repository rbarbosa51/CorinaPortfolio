import { memo } from "react";
import "winbox/dist/css/winbox.min.css";
import "winbox/dist/css/themes/modern.min.css"; //Optional
import WinBox from "react-winbox";
import { useState } from "react";

const Corina = () => {
  return (
    <div className="z-10 flex items-center justify-center">
      <img src="/images/corina.webp" />
    </div>
  );
};
const Dog1 = () => {
  return (
    <div className="z-10 flex items-center justify-center">
      <img src="/images/puppy.webp" />
    </div>
  );
};
const Photos = () => {
  const [corina, setCorina] = useState(false);
  const [dog1, setDog1] = useState(false);

  return (
    <div className="flex min-h-full bg-pink-50 text-black/50">
      <div
        className="flex flex-col items-center p-6"
        onClick={() => setCorina(true)}
      >
        <div>
          <img className="h-12 w-12" src="/icons/image.svg" />
        </div>
        <div>Corina</div>
      </div>
      <div
        className="flex flex-col items-center p-6"
        onClick={() => setDog1(true)}
      >
        <div>
          <img className="h-12 w-12" src="/icons/image.svg" />
        </div>
        <div>Emi</div>
      </div>

      {corina && (
        <WinBox
          title="corina"
          noMax
          noFull
          width={300}
          height={300}
          className="modern"
          onClose={() => setCorina(false)}
          bottom={(window.innerHeight / 100) * 8}
        >
          <Corina />
        </WinBox>
      )}
      {dog1 && (
        <WinBox
          title="Emi"
          noMax
          noFull
          width={300}
          height={300}
          className="modern"
          onClose={() => setDog1(false)}
          bottom={(window.innerHeight / 100) * 8}
        >
          <Dog1 />
        </WinBox>
      )}
    </div>
  );
};
export default memo(Photos);
