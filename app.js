const supabase = window.supabase.createClient(
    "https://qpefvvyrucisglqjwnsg.supabase.co",
    "你的 Publishable Key"
);

async function subscribe() {

    const email = document.getElementById("email").value;

    const keywords = document.getElementById("keywords").value;

    const { error } = await supabase
        .from("subscribers")
        .insert([
            {
                email,
                keywords
            }
        ]);

    if (error) {

        alert(error.message);

    } else {

        alert("订阅成功！");

    }

}
