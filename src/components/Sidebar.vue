<template>
    <div class="sidebar">
        <div class="logo-container">
            <p><span>msg</span></p>
        </div>
        <div class="menu">
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link " >
                        <icons icon="th-large" class="icons" />
                        Dashboard
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " >
                        <icons icon="comment-alt" class="icons" />
                        Messages
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active " aria-current="page">
                        <icons icon="bookmark" class="icons" />
                        Contacts
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " >
                        <icons icon="calendar" class="icons" />
                        Message Calendar
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Sidebar",
    }
</script>

<style scoped lang="scss">
    @import "../assets/css/variables";

    .sidebar {
        padding: 1em;
    }

    .logo-container {
        color: $globalBaseColor;
        font-family: SF UI Display,sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 1.5em;
        line-height: 1.1875em;

        p {
            margin-bottom: 60px;
        }

        span::after {
            content: '.';
            color: red;
        }
    }

    .nav-link {
        @include globalBaseFont;
        color: $globalBaseColor;
        cursor: pointer;
        font-size: 1em;

        &:hover {
            color: $globalBaseColor;
        }

        &.active {
            background: #E7F6E3;
            border-radius: 5px;
        }

        .icons {
            margin-right: 15px;
            position: relative;
            bottom: 2px;
        }
    }

</style>