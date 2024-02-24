async function convertTextFile(input: string, output: string) {
    await Deno.writeTextFile(output, await Deno.readTextFile(input));
    console.log(input + " file converted to " + output);
}

console.log(convertTextFile(Deno.args[0], Deno.args[1]));

// How to run : "deno run --allow-read --allow-write soal2-deno.ts ./homework.log ./log.txt"