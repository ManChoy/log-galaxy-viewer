const Koa = require('koa');
const serve = require('koa-static');
const app = new Koa();
const path = require('path');
const chalk = require('chalk');
const PORT = 8100;
app.use(serve(path.join(__dirname + '/../dist')));

app.listen(PORT, () => {
	console.log(chalk.green("Log Galaxy Viewer started and listened on port %s"), PORT);
	process.send({ok: true});
})
.on('error', (err) => {
    console.log(chalk.red("Unable to start Log Galaxy Viewer", err));
    process.send({ok: false, error: err});
    process.exit();
});

