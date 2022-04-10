<script>
  import {getAvatarColor} from "../utils/avatarColors";
  import {getDateFormat} from "../utils/dateFormat";
  import {userList} from "../utils/users";

</script>

<div class="card-container">
  {#each userList as {
    id,
    name,
    lastMessage,
    avatar,
    time,
    messagesCount
  }, index (id) }
    {@const avatarColor = getAvatarColor()}
    <div class="user-container">

      {#if avatar}
        <img src={avatar} alt={name + ' avatar'}>
      {:else}

        <div class="avatar" style="background-color: {avatarColor.background}; color: {avatarColor.color};">
          {name[0].toUpperCase()}{name.split(' ')[1][0].toUpperCase()}
        </div>

      {/if}
      <div class="content">
        <div class="name">
          {name}
        </div>
        <div class="status">
          {lastMessage}
        </div>
      </div>
      <div class="actions">
        <div class="time">
          {getDateFormat(time)}
        </div>
        {#if messagesCount}
          <div class="messages-count">
            {messagesCount}

          </div>
        {/if}
      </div>
    </div>
  {/each}
</div>

<style>
  .card-container {
    width: 350px;
    margin-bottom: 50px;
    display: inline-block;
    border-radius: 20px;
    background-color: #fff;
    padding: 10px;
  }

  .user-container {
    position: relative;
    /*width: 350px;*/
    /*height: 45px;*/
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    padding: 10px 15px;

  }

  .user-container:not(:last-child):after {
    left: 25%;
    bottom: 0;
    position: absolute;
    display: block;
    content: '';
    border-bottom: 1px solid #efefef;
    height: 1px;
    width: 70%;
  }

  .avatar, .user-container > img {
    height: 60px;
    width: 60px;
    border-radius: 50%;
  }

  .avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 18px;
  }

  .user-container > img {
    object-fit: cover;
  }

  .content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-left: 10px;
  }

  .content .name {
    font-weight: bold;
    margin-bottom: 5px;
  }


  .content .status, .time {
    color: #ccc;
    font-size: small;
  }

  .actions {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }

  .messages-count {
    background-color: #5458F6;
    color: #fff;
    font-size: small;
    padding: 3px 7px;
    border-radius: 50px;
  }

  .time {
    font-size: small;
    align-self: flex-end;
  }
</style>