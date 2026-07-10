const { createClient } = window.supabase;

const client = createClient(
    "https://qpefvvyrucisglqjwnsg.supabase.co",
    "sb_publishable_zP0qNoX-Pav10KbXXADlbQ_HU_DFy8Z"
);

async function subscribe() {

    const email = document.getElementById("email").value.trim();

    const keywords = document.getElementById("keywords").value.trim();

    const msg = document.getElementById("msg");

    msg.style.color = "white";
    msg.textContent = "";

    if (!email) {

        msg.style.color = "#ef4444";
        msg.textContent = "请输入邮箱";

        return;
    }

    if (!keywords) {

        msg.style.color = "#ef4444";
        msg.textContent = "请输入关键词";

        return;
    }

    const { error } = await client
        .from("subscribers")
        .insert([
            {
                email,
                keywords
            }
        ]);

    if (error) {

        msg.style.color = "#ef4444";
        msg.textContent = error.message;

        return;
    }

    msg.style.color = "#22c55e";
    msg.textContent = "✅ 订阅成功！";

    document.getElementById("email").value = "";

    document.getElementById("keywords").value = "";
}
