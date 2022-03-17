import moduleAlias from "module-alias";
import { join } from "path";

moduleAlias.addAliases({
	"@": __dirname,
	"@app/*": join(__dirname, "./app/*"),
	"@routes/*": join(__dirname, "./routes/*"),
	"@controllers/*": join(__dirname, "./controllers/*"),
	"@services/*": join(__dirname, "./services/*"),
	"@errors/*": join(__dirname, "./errors/*"),
	"@interfaces/*": join(__dirname, "./interfaces/*"),
});
