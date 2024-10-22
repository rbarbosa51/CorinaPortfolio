import "winbox/dist/css/winbox.min.css";
import "winbox/dist/css/themes/modern.min.css";
import WinBox from "react-winbox";
// import { memo } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Bin,
  Photos,
  Spotify,
  Puzzle,
  Experience,
  Wiki,
  Videos,
  Note,
  Terminal,
} from "../components";

const Taskbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="absolute bottom-0 flex h-[7vh] w-full items-center justify-between border-t border-white bg-white/50 px-6 backdrop-blur-sm backdrop-filter">
        {/* Start Button */}
        <div
          className="window-logo relative h-8 w-8 cursor-pointer p-5"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu && (
            <div
              className="absolute flex h-16 w-36 -translate-x-4 -translate-y-24 transform flex-col justify-center rounded-lg border border-black/50 bg-white/50 px-4 backdrop-blur-sm backdrop-filter"
              onClick={() => navigate("/hub")}
            >
              <div className="flex items-center justify-between">
                <img className="h-8 w-8" src="/icons/power.svg" />
                Shutdown
              </div>
            </div>
          )}
        </div>
        {/* End Start Button */}
        <div className="flex items-center gap-2">
          <div>
            <img className="h-8 w-8" src="/icons/usb.svg" />
          </div>
          <div>
            <img className="h-8 w-8" src="/icons/antivirus.svg" />
          </div>
          <div>
            <img className="h-8 w-8" src="/icons/wifi.svg" />
          </div>
          <div>
            <img className="h-8 w-8" src="/icons/volume.svg" />
          </div>
          <div>
            <img className="h-8 w-8" src="/icons/battery.svg" />
          </div>
          <div>
            {new Date().toLocaleDateString("en-us", {
              weekday: "short",
              hour: "numeric",
              minute: "numeric",
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const OS = () => {
  const [recycleBin, setRecycleBin] = useState(false);
  const [photos, setPhotos] = useState(false);
  const [spotify, setSpotify] = useState(false);
  const [puzzle, setPuzzle] = useState(false);
  const [experience, setExperience] = useState(false);
  const [wiki, setWiki] = useState(false);
  const [terminal, setTerminal] = useState(false);
  const [videos, setVideos] = useState(false);
  const [note, setNote] = useState(false);

  return (
    <div className="desktop-bg relative">
      <Taskbar />
      {/* Recycle Bin */}
      <div
        className="absolute left-[2%] top-[4%] flex cursor-pointer flex-col items-center justify-center text-xs md:text-sm"
        onClick={() => setRecycleBin(true)}
      >
        <img className="h-12 w-12" src="/icons/recyclebin.svg" />
        <div className="text-black">Recycle Bin</div>
      </div>
      {/* Recycle Bin */}
      {/* Photo Folder */}
      <div
        className="absolute left-[3%] top-[18%] flex flex-col items-center justify-center text-xs md:text-sm"
        onClick={() => setPhotos(true)}
      >
        <img className="h-12 w-12" src="/icons/folder.svg" />
        <div className="text-black">Photos</div>
      </div>
      {/* End Photo Folder */}
      {/* Spotify */}
      <div
        className="absolute left-[3%] top-[33%] flex flex-col items-center justify-center text-xs md:text-sm"
        onClick={() => setSpotify(true)}
      >
        <img className="h-12 w-12" src="/icons/spotify.svg" />
        <div className="text-black">Spotify</div>
      </div>
      {/* End Sotify */}

      {/* Puzzle */}
      <div
        className="absolute left-[3%] top-[48%] flex flex-col items-center justify-center text-xs md:text-sm"
        onClick={() => setPuzzle(true)}
      >
        <img className="h-12 w-12" src="/icons/gamecard.svg" />
        <div className="text-black">Puzzle</div>
      </div>
      {/* End Puzzle */}
      {/* Experience Folder */}
      <div
        className="absolute left-[2%] top-[63%] flex flex-col items-center justify-center text-xs md:text-sm"
        onClick={() => setExperience(true)}
      >
        <img className="h-12 w-12" src="/icons/timeline.svg" />
        <div className="text-black">Experience</div>
      </div>
      {/* End Experience */}
      {/* Wiki Folder */}
      <div
        className="absolute left-[20%] top-[4%] flex flex-col items-center justify-center text-xs md:left-[11%] md:text-sm"
        onClick={() => setWiki(true)}
      >
        <img className="h-12 w-12" src="/icons/wikipedia.svg" />
        <div className="text-black">Wiki</div>
      </div>
      {/* End Wiki Folder */}
      {/* Terminal */}
      <div
        className="absolute left-[20%] top-[18%] flex flex-col items-center justify-center text-xs md:left-[10.7%] md:text-sm"
        onClick={() => setTerminal(true)}
      >
        <img className="h-12 w-12" src="/icons/terminal.svg" />
        <div className="text-black">Terminal</div>
      </div>
      {/* End Terminal */}
      {/* Youtube */}
      <div
        className="absolute left-[20%] top-[32.6%] flex flex-col items-center justify-center text-xs md:left-[10.7%] md:text-sm"
        onClick={() => setVideos(true)}
      >
        <img className="h-12 w-12" src="/icons/youtube.svg" />
        <div className="text-black">Videos</div>
      </div>
      {/* End Youtube */}
      {/* Note */}
      <div
        className="absolute left-[20%] top-[47.9%] flex flex-col items-center justify-center text-xs md:left-[10.7%] md:text-sm"
        onClick={() => setNote(true)}
      >
        <img className="h-12 w-12" src="/icons/note.svg" />
        <div className="text-black">Note</div>
      </div>
      {/* End Note */}
      {recycleBin && (
        <WinBox
          title="Recycle Bin"
          x={"center"}
          y={"center"}
          width={350}
          height={150}
          className="modern"
          noFull
          noMax
          bottom={(window.innerHeight / 100) * 8}
          onClose={() => setRecycleBin(false)}
        >
          <Bin />
        </WinBox>
      )}

      {photos && (
        <WinBox
          title="Photos"
          x={"center"}
          y={"center"}
          width={300}
          height={150}
          className="modern"
          noFull
          noMax
          bottom={(window.innerHeight / 100) * 8}
          onClose={() => setPhotos(false)}
        >
          <Photos />
        </WinBox>
      )}

      {spotify && (
        <WinBox
          title="Spotify"
          width={500}
          height={200}
          className="modern"
          noFull
          noMax
          bottom={(window.innerHeight / 100) * 8}
          onClose={() => setSpotify(false)}
        >
          <Spotify />
        </WinBox>
      )}
      {puzzle && (
        <WinBox
          title="Puzzle"
          noFull
          noMax
          width={window.innerWidth}
          height={window.innerHeight}
          className="modern"
          bottom={(window.innerHeight / 100) * 8}
          onClose={() => setPuzzle(false)}
        >
          <Puzzle />
        </WinBox>
      )}
      {experience && (
        <WinBox
          title="Work Experience"
          noFull
          noMax
          width={720}
          height={350}
          className="modern"
          bottom={(window.innerHeight / 100) * 8}
          onClose={() => setExperience(false)}
        >
          <Experience />
        </WinBox>
      )}
      {wiki && (
        <WinBox
          title="Wiki Articles"
          noFull
          noMax
          width={300}
          height={150}
          x={"center"}
          y={"center"}
          className="modern"
          bottom={(window.innerHeight / 100) * 8}
          onClose={() => setWiki(false)}
        >
          <Wiki />
        </WinBox>
      )}
      {terminal && (
        <WinBox
          title="Corina's Terminal"
          noFull
          width={window.innerWidth - 200}
          height={window.innerHeight - 100}
          x={"center"}
          y={"center"}
          className="modern"
          bottom={(window.innerHeight / 100) * 8}
          onClose={() => setTerminal(false)}
        >
          <Terminal />
        </WinBox>
      )}
      {videos && (
        <WinBox
          title="Youtube Videos"
          noFull
          noMax
          width={400}
          height={150}
          x={"center"}
          y={"center"}
          className="modern"
          bottom={(window.innerHeight / 100) * 8}
          onClose={() => setVideos(false)}
        >
          <Videos />
        </WinBox>
      )}
      {note && (
        <WinBox
          title="Personal Note"
          noFull
          noMax
          width={400}
          height={400}
          x={"center"}
          y={"center"}
          className="modern"
          bottom={(window.innerHeight / 100) * 8}
          onClose={() => setNote(false)}
        >
          <Note />
        </WinBox>
      )}
    </div>
  );
};
// export default memo(OS);
export default OS;
