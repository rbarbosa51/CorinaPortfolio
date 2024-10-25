import { useState, useRef, useEffect } from "react";
//import { handleInput } from "../utils";
export const handleInput = (input) => {
  if (!input) return;
  switch (input) {
    case "help":
      return `Available commands are: awards, corina, fun, projects, socials, secret`;
    case "awards":
      return `Corina's Awards include: 
Award 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et augue tincidunt ligula consequat pulvinar lacinia a tortor.
Award 2: Second award lslslslsllslslsssllsls
Award 3: LOWOWLWLWWLWL`;
    case "corina":
      return `Motivated, results-oriented, and dynamic professional with more than 10 years of comprehensive experience in software development and engineering in innovative and constantly evolving environments. Skilled communicator, team player, and hands-on leader about to build relationships with teams, peers, and clients. Analytical and organized with fearless approach to problem solving and an aptitude for identifying opportunities to improve.`;
    case "socials":
      return `email: email@test.com
twitter: @someuser
facebook: https://facebook.com/someuser
linkedin: https://linkedin.com/iser`;
    case "secret":
      window.open("https://www.youtube.com/watch?v=j9V78UbdzWI", "_blank");
      break;
    case "fun":
      return `Corina likes too do these things for fun: lorem ipsum.....loprem ipsum`;
    case "projects":
      return `Projects include:
Project Name: Lorem ipsum  ..... lorem ipsum end
Random Project Name: Lorem Ipsum .... lorem ipsum
Other Project name: Lorem Ipsum .... lorem ipsum`;
    default:
      return "Unknown command type help to view available commands";
  }
};

const Terminal = () => {
  const [commands, setCommands] = useState([]);
  const [input, setInput] = useState();
  const inputRef = useRef();
  const promptLabel = "/user/home (type help): $ ";

  useEffect(() => {
    if (!inputRef.current) {
      console.log("Empty");
      return;
    }
    inputRef.current.scrollIntoView({ behavior: "smooth" });
    document.getElementById("prompt").value = "";
  }, [commands]);

  return (
    <div className="h-full w-full bg-slate-900 px-8 pt-4 font-inconsolata text-lg text-green-200/80">
      <div className="text-4xl">Corina's Terminal</div>
      <div>Login: {new Date().toDateString()}</div>

      {commands &&
        commands.map((item, key) => (
          <div key={key}>
            <div className="flex flex-col">
              <div>{item.prompt}</div>
              <div className="whitespace-pre-wrap text-white/80">
                {item.response}
              </div>
            </div>
          </div>
        ))}
      <div className="flex">
        <label htmlFor="prompt">
          {promptLabel}
          <input
            ref={inputRef}
            autoFocus
            className="mb-1 border-none bg-transparent px-2 outline-none"
            id="prompt"
            type="text"
            autoComplete="false"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key !== "Enter") return;
              setCommands([
                ...commands,
                {
                  prompt: `${promptLabel} ${e.target.value}`,
                  response: handleInput(input),
                },
              ]);
            }}
          />
        </label>
      </div>
    </div>
  );
};
export default Terminal;
