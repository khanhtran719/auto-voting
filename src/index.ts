import puppeteerExtra from 'puppeteer-extra';
import stealthPlugin from 'puppeteer-extra-plugin-stealth';
import puppeteer from 'puppeteer';
import { readFileExcel } from './importData';

const data = readFileExcel('./data/Book1.xlsx');

const wait = async (time) =>
    new Promise((res, rej) => setTimeout(() => res(true), time));

const pressTab = async (page, num) => {
    for (let i = 0; i < num; i++) {
        await page.keyboard.press("Tab");
        await wait(100);
    }
};

const type = async (page, type) => {
    await page.keyboard.type(type);
    await wait(100);
};

const submitForm = async (email, password, name, birthday, gender) => {
    puppeteerExtra.use(stealthPlugin());
    const browser = await puppeteerExtra.launch({ headless: false });
    // const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSeU8ggDFLRL-BL126geTvh2dsLDyyQFHcnEYQhwZ00u6iFOfQ/viewform');
    await wait(500);
    await page.keyboard.press("Enter");
    await page.waitForNavigation();
    await wait(500);
    await page.type('[type="email"]', "nguyen2608khanh@gmail.com", { delay: 50 });
    await page.click('#identifierNext');
    await page.waitForTimeout(2000);

    await page.type('[type="password"', "khanhlolaten719", { delay: 50 });
    await page.click('#passwordNext');
    await page.waitForNavigation();
    await wait(2000);

    await pressTab(page, 5);
    await wait(500);
    await page.keyboard.press("Enter");
    await wait(500);
    await pressTab(page, 1);
    await page.keyboard.press("Enter");

    await wait(2000);

    await page.type('[type="email"]', "nguyen2608khanh@gmail.com", { delay: 100 });
    await page.click(`div[role='button']`);
    await wait(500);
    await page.waitForNavigation();

    await pressTab(page, 2);
    await wait(100);
    await page.keyboard.type("Trần Nguyên Khánh");

    await pressTab(page, 1);
    await wait(100);
    await page.keyboard.type("2001");

    await pressTab(page, 1);
    await wait(500);
    await page.keyboard.press("ArrowDown");

    if (1) {
        await page.keyboard.press("ArrowUp");

        await wait(500);
    }
    await pressTab(page, 2);
    await wait(100);
    await page.keyboard.press("Enter");
    await page.waitForNavigation();

    await pressTab(page, 3);
    await wait(500);
    await page.keyboard.press("ArrowDown");
    if (0) {
        await page.keyboard.press("ArrowDown");
        await wait(500);
    }

    await wait(500);

    await pressTab(page, 3);
    await wait(500);
    await page.keyboard.press("ArrowDown");
    if (1) {
        await page.keyboard.press("ArrowUp");
        await wait(500);
    }

    await pressTab(page, 3);
    await wait(500);
    await page.keyboard.press("ArrowDown");
    if (0) {
        await page.keyboard.press("ArrowDown");
        await wait(500);
    }

    await wait(500);

    await pressTab(page, 3);
    await wait(500);
    await page.keyboard.press("ArrowDown");
    if (0) {
        await page.keyboard.press("ArrowDown");
        await wait(500);
    }

    await wait(500);

    await pressTab(page, 5);
    // await page.keyboard.press("Enter");

    await browser.close();
}

(async () => {
    console.log(data);
    // console.log(data);
    // const length = data.length;
    // for (let i = 0; i < length; i++) {
    //     try {
    //         await submitForm(
    //             data[i]["email"],
    //             data[i]["password"],
    //             data[i]["name"],
    //             data[i]["birthday"],
    //             data[i]["gender"]
    //         );
    //         await wait(Math.ceil(1000 + Math.random() * 50000));
    //     } catch { }
    // }
    for (let i = 0; i < 10; i++) {
        try {
            await submitForm(
                "email",
                "password",
                "name",
                "birthday",
                "gender"
            );
            await wait(Math.ceil(1000 + Math.random() * 50000));
        } catch { }
    }

})();