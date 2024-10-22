const Videos = () => {
  return (
    <div className="flex min-h-full flex-wrap gap-8 bg-pink-50 px-8 py-4 text-black/50">
      <div
        className="flex flex-col items-center"
        onClick={() =>
          window.open("https://www.youtube.com/watch?v=s7eUpLwv0Go", "_blank")
        }
      >
        <div>
          <img className="h-12 w-12" src="/icons/ty-browser.svg" />
        </div>
        <div>Me llueven</div>
      </div>
      <div
        className="flex flex-col items-center"
        onClick={() =>
          window.open("https://www.youtube.com/watch?v=WgIpM-4ZX88", "_blank")
        }
      >
        <div>
          <img className="h-12 w-12" src="/icons/ty-browser.svg" />
        </div>
        <div>KDP</div>
      </div>
      <div
        className="flex flex-col items-center"
        onClick={() =>
          window.open("https://www.youtube.com/watch?v=8I68chaq2sM", "_blank")
        }
      >
        <div>
          <img className="h-12 w-12" src="/icons/ty-browser.svg" />
        </div>
        <div>Lukeando</div>
      </div>
    </div>
  );
};
export default Videos;
