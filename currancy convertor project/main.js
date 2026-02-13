const currencies = {
    USD:{name:"US Dollar",flag:"us"},
    PKR:{name:"Pakistani Rupee",flag:"pk"},
    EUR:{name:"Euro",flag:"eu"},
    GBP:{name:"British Pound",flag:"gb"},
    INR:{name:"Indian Rupee",flag:"in"},
    SAR:{name:"Saudi Riyal",flag:"sa"},
    AED:{name:"UAE Dirham",flag:"ae"},
    JPY:{name:"Japanese Yen",flag:"jp"},
    CNY:{name:"Chinese Yuan",flag:"cn"},
    AUD:{name:"Australian Dollar",flag:"au"},
    CAD:{name:"Canadian Dollar",flag:"ca"},
    CHF:{name:"Swiss Franc",flag:"ch"},
    TRY:{name:"Turkish Lira",flag:"tr"},
    BDT:{name:"Bangladeshi Taka",flag:"bd"},
    LKR:{name:"Sri Lankan Rupee",flag:"lk"},
    MYR:{name:"Malaysian Ringgit",flag:"my"},
    SGD:{name:"Singapore Dollar",flag:"sg"},
    THB:{name:"Thai Baht",flag:"th"},
    ZAR:{name:"South African Rand",flag:"za"}
};

const from = document.getElementById("from");
const to = document.getElementById("to");


for (let code in currencies) {
    let text = `${code} - ${currencies[code].name}`;
    from.add(new Option(text, code));
    to.add(new Option(text, code));
}


from.value = "USD";
to.value = "PKR";

async function convert() {
    let amount = document.getElementById("amount").value;

    if (!amount || amount <= 0) {
        alert("Enter valid amount");
        return;
    }

    let base = from.value;
    let target = to.value;

    try {
        let response = await fetch(`https://open.er-api.com/v6/latest/${base}`);
        let data = await response.json();

        let rate = data.rates[target];
        let result = (amount * rate).toFixed(2);

        document.getElementById("result").innerHTML = `
            <img src="https://flagcdn.com/24x18/${currencies[base].flag}.png">
            ${amount} ${base}
            =
            <img src="https://flagcdn.com/24x18/${currencies[target].flag}.png">
            ${result} ${target}
        `;
    } catch (error) {
        document.getElementById("result").innerText = "Error loading rates";
    }
}
