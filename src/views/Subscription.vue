<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3 aside">
                <div class="header">
                    <h6>Contacts</h6>
                   <div class="header-btn">
                       <button type="button" class="btn btn-sm">
                           <icons icon="filter" class="icons" />
                       </button>
                       <button type="button" class="btn btn-sm icon-filled">
                           <icons icon="plus" class="icons" />
                       </button>
                   </div>
                </div>
                <div class="list">
                    <div class="content-list">
                        <div class="search-input">
                            <div>
                                <icons icon="search" class="icons search-icon" />
                                <input type="text" ref="searchInput" placeholder="Search contacts here" >
                                <icons icon="times-circle" class="icons clear-icon" @click="$refs.searchInput.value = ''" />
                            </div>
                        </div>
                        <ul class="list-group">
                            <li class="list-group-item active">
                                <p class="list-item-title">(+233)506785930</p>
                                <p class="list-item-desc">Date Added: Sep 01,2020</p>
                            </li>
                            <li class="list-group-item ">
                                <p class="list-item-title">(+233)506785930</p>
                                <p class="list-item-desc">Date Added: Sep 01,2020</p>
                            </li>
                            <li class="list-group-item ">
                                <p class="list-item-title">(+233)506785930</p>
                                <p class="list-item-desc">Date Added: Sep 01,2020</p>
                            </li>
                            <li class="list-group-item ">
                                <p class="list-item-title">(+233)506785930</p>
                                <p class="list-item-desc">Date Added: Sep 01,2020</p>
                            </li>
                            <li class="list-group-item ">
                                <p class="list-item-title">(+233)506785930</p>
                                <p class="list-item-desc">Date Added: Sep 01,2020</p>
                            </li>
                        </ul>
                    </div>
                    <div class="pagination">
                        <nav >
                            <ul class="pagination justify-content-center">
                                <li class="page-item active" aria-current="page">
                                    <span class="page-link">25</span>
                                </li>
                                <li class="page-item"><a class="page-link">50</a></li>
                                <li class="page-item"><a class="page-link">100</a></li>
                                <li>Items per page</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="col-md-9">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Subscription",
        methods: {
            clearInput: (event) => {
                console.log(event.target.parentElement.querySelectorAll("input[type='text']"))
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/css/variables";

    $blackColor: #333333;
    $blackColor2: #303030;

    .container, .row {
        height: 100%;
    }

    .aside {
        background-color: #E5E5E5;
        padding: 0;
        display: flex;
        flex-direction: column;
    }

    .header, .content-list {
        padding: 1em 1em 1em 1.5em;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 40px;

        h6 {
            margin-bottom: 0;
            @include globalBaseFont;
            font-weight: 700;
            color: $globalBaseColor;
            font-size: 1.2em;
        }
    }

    .header-btn button{
        @include IconBtn;
        margin-left: 10px;
    }

    .list {
        flex-grow: 2;
        display: flex;
        flex-direction: column;

        ul {
            margin-top: 15px;
        }

        p {
            margin: 0;
            @include globalBaseFont;
            font-size: 0.85em;
        }

        .list-group-item {
            background-color: transparent;
            border: none;
            margin-top: 10px;

            &.active {
                background-color: white;
                box-shadow: 8px 8px 70px rgba(71, 98, 79, 0.1);
                border-radius: 5px;
                margin-top: 10px;

                .list-item-title {
                    color: $globalBaseColor;
                }
            }


        }

        .list-item-title {
            color: $blackColor;
            font-weight: bold;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 0.01em;
            margin-bottom: 5px;
        }

        .list-item-desc {
            font-style: italic;
            font-weight: normal;
            font-size: 14px;
            line-height: 17px;
            color: #7C8293;
        }

    }

    .content-list {
        flex-grow: 2;
        padding-top: 0;
    }

    .pagination {
        background: #FAFBFC;
        box-shadow: 0px -4px 30px rgba(0, 0, 0, 0.03);

        ul {
            margin: 10px;
        }

        li {
            color: $blackColor2;
        }

        li:not(.page-item) {
            font-size: 0.7em;
            margin: 10px;
        }

        .page-link {
            background-color: transparent;
            color: $blackColor2;
            font-size: 0.8em;

            &:focus {
                box-shadow: 0 0 0 0.05rem #A0A3B3;
            }
        }

        .page-item.active .page-link{
            background: #A0A3B3;
            color: white;
            border-color: #A0A3B3;
        }
    }

    .search-input {

        div {
            background: #FFFFFF;
            border: 1px solid rgba(1, 145, 97, 0.2);
            box-sizing: border-box;
            border-radius: 3px;
            padding: 0.2rem;

            &:hover{
                box-shadow: 0 0 0.2em rgba(1, 145, 97, 0.2);
                outline: none;
            }
        }

        .icons {
            font-size: .8rem;
        }

        .search-icon {
            color: #019161;
            margin: 0.4em 0.4em 0.5em;
        }

        .clear-icon {
            float: right;
            margin: 0.6em 0.3em 0.3em;
            background-color: #F5F6F8;
            color: white;
            cursor: pointer;
            border-radius: 50%;

            &:hover {
                background-color: #E8E9EB;
                box-shadow: 0 0 0.2em #E8E9EB;

            }
        }

        input {
            width: 75%;
            border: none;
            background-color: transparent;
            box-shadow: none;
            @include globalBaseFont;
            color: #989898;
            font-size: 0.85em;

            &:focus {
                outline: none;
            }
        }

        input[placeholder], input[value] {
            @include globalBaseFont;
            color: #989898;
            font-size: 0.85em;
        }


        .icons, input {
            display: inline-block;
        }
    }
</style>