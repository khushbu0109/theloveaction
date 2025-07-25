'use client'
import Link from 'next/link'
import React, { useRef } from 'react'

const Page = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const playMusic = () => {
    audioRef.current?.play()
  }

  const pauseMusic = () => {
    audioRef.current?.pause()
  }

  return (
    <div className="text-center p-6 bg-black text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-2">I Love You in My Every Language 💖</h1>
      <p className="mb-4">And Play it first....</p>

      <div className="flex gap-4 justify-center mb-6">
        <button onClick={playMusic} className="bg-pink-600 px-4 py-2 rounded text-white hover:bg-pink-700">
          💌 Play the Song
        </button>
        <button onClick={pauseMusic} className="bg-gray-500 px-4 py-2 rounded text-white hover:bg-gray-600">
          ⏸️ Pause
        </button>
      </div>

      <audio id="loveAudio" loop ref={audioRef}>
        <source src="./assets/editsong.mp3" type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>

      <h1 className="text-2xl font-semibold mt-6 mb-4">I Love You 💻💖</h1>

      {/* Code Block Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left max-w-6xl mx-auto text-sm">
        <div className="code-block"><div className="language">1. Python</div>print("I love you")</div>
        <div className="code-block"><div className="language">2. JavaScript</div>console.log("I love you");</div>
        <div className="code-block"><div className="language">3. Java</div>System.out.println("I love you");</div>
        <div className="code-block"><div className="language">4. C</div>printf("I love you\\n");</div>
        <div className="code-block"><div className="language">5. C++</div>std::cout "I love you" std endl;</div>
        <div className="code-block"><div className="language">6. C#</div>Console.WriteLine("I love you");</div>
        <div className="code-block"><div className="language">7. Ruby</div>puts "I love you"</div>
        <div className="code-block"><div className="language">8. PHP</div>echo "I love you";</div>
        <div className="code-block"><div className="language">9. Swift</div>print("I love you")</div>
        <div className="code-block"><div className="language">10. Kotlin</div>println("I love you")</div>
        <div className="code-block"><div className="language">11. Go</div>fmt.Println("I love you")</div>
        <div className="code-block"><div className="language">12. Rust</div>println!("I love you");</div>
        <div className="code-block"><div className="language">13. R</div>print("I love you")</div>
        <div className="code-block"><div className="language">14. Scala</div>println("I love you")</div>
        <div className="code-block"><div className="language">15. TypeScript</div>console.log("I love you");</div>
        <div className="code-block"><div className="language">16. SQL</div>SELECT 'I love you';</div>
        <div className="code-block"><div className="language">17. Bash</div>echo "I love you"</div>
        <div className="code-block"><div className="language">18. Perl</div>print "I love you\\n";</div>
        <div className="code-block"><div className="language">19. HTML</div>&lt;p&gt;I love you&lt;/p&gt;</div>
        <div className="code-block"><div className="language">20. CSS</div>p::after &#123; content: "I love you"; &#125;</div>
        <div className="code-block"><div className="language">21. Dart</div>print("I love you");</div>
        <div className="code-block"><div className="language">22. Elixir</div>IO.puts "I love you"</div>
        <div className="code-block"><div className="language">23. Haskell</div>putStrLn "I love you"</div>
        <div className="code-block"><div className="language">24. Assembly (x86)</div>mov dx, msg ; msg = "I love you"</div>
        <div className="code-block"><div className="language">25. Julia</div>println("I love you")</div>
        <div className="code-block"><div className="language">26. Lua</div>print("I love you")</div>
        <div className="code-block"><div className="language">27. Fortran</div>PRINT *, "I love you"</div>
        <div className="code-block"><div className="language">28. F#</div>printfn "I love you"</div>
        <div className="code-block"><div className="language">29. OCaml</div>print_endline "I love you"</div>
        <div className="code-block"><div className="language">30. D</div>writefln("I love you");</div>
        <div className="code-block"><div className="language">31. Crystal</div>puts "I love you"</div>
        <div className="code-block"><div className="language">32. Smalltalk</div>'I love you' display.</div>
        <div className="code-block"><div className="language">33. COBOL</div>DISPLAY "I love you".</div>
        <div className="code-block"><div className="language">34. Prolog</div>write('I love you').</div>
        <div className="code-block"><div className="language">35. Nim</div>echo "I love you"</div>
        <div className="code-block"><div className="language">36. V</div>println('I love you')</div>
        <div className="code-block"><div className="language">37. Zig</div>std.debug.print("I love you\\n", .{ });</div>
        <div className="code-block"><div className="language">38. Apex</div>System.debug('I love you');</div>
        <div className="code-block"><div className="language">39. PowerShell</div>Write-Output "I love you"</div>
        <div className="code-block"><div className="language">40. Hack</div>echo "I love you";</div>
        <div className="code-block"><div className="language">41. AWK</div>BEGIN &#123; print "I love you" &#125;</div>
        <div className="code-block"><div className="language">42. TCL</div>puts "I love you"</div>
        <div className="code-block"><div className="language">43. Eiffel</div>io.put_string ("I love you")</div>
        <div className="code-block"><div className="language">44. Ada</div>Put_Line("I love you");</div>
        <div className="code-block"><div className="language">45. Mercury</div>io.write_string("I love you")</div>
        <div className="code-block"><div className="language">46. ReScript</div>Js.log("I love you")</div>
        <div className="code-block"><div className="language">47. Mojo</div>print("I love you")</div>
        <div className="code-block"><div className="language">48. Solidity</div>emit Love("I love you");</div>
        <div className="code-block"><div className="language">49. AssemblyScript</div>console.log("I love you");</div>
        <div className="code-block"><div className="language">50. Brainfuck</div>++++++++++[++++++++++++++++++++-]++.+.+++++++..+++.++.+++++++++++++++..+++.------.--------.+..</div>
      </div>

      {/* Final Footer */}
      <footer className="mt-10 text-center text-xl text-pink-400">
        💬 No matter the language...<br />
        <strong>I LOVE YOU FOREVER</strong> 💖
      </footer>

      <div className="text-center mt-10">
        <h3 className="text-lg">Tumhe mujhe jhelna hi pdeaga princess</h3>
        <h3 className="text-sm">So you basically have a single option </h3>
        <h5 className="mt-2">Click on this button ↶</h5>

        <div className="mt-4">
          <Link href={"./love"}>
            <button className="bg-red-600  text-white px-6 py-2 rounded-full redbtn">
              Give Yourself to Me Totally
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Page
