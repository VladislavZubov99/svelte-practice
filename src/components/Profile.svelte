<script>
  import Button from "./Button.svelte";

  const profile = {
    mainImage: 'https://static.dw.com/image/45832122_303.jpg',
    avatar: 'https://cdn.dribbble.com/users/360356/screenshots/7098480/media/c96a0f1de333986451a4b66dda3a2fca.jpg?compress=1&resize=400x300&vertical=top',
    name: 'Freddie Mercury',
    type: 'The Artist',
    followers: '200M'
  }
</script>

<div class="card-container">
  <div class="header">
    <div class="icon-button">
      <img src="/assets/icons/left-arrow.svg"/>
    </div>
    <div class="icon-button">
      <img src="/assets/icons/dots.svg"/>
    </div>
  </div>
  <div class="main-image">
    <img src={profile.mainImage} alt="">
  </div>
  <div class="content">
    <div class="avatar">
      <img src={profile.avatar}>
    </div>
    <div class="name">
      {profile.name}, {profile.type}
    </div>
    <div class="followers">
      {profile.followers} followers
    </div>
    <div class="actions">
      <Button>
        Follow
      </Button>
      <Button style="
      border: 1px solid #cccccc;
      background-color: rgba(0,0,0,.02);
      width: 50px;">
        <img src="/assets/icons/message.svg" width="18px">
      </Button>
    </div>
  </div>

</div>

<style>
  .card-container {
    position: relative;
    width: 350px;
    margin-bottom: 50px;
    display: inline-block;
    border-radius: 20px;
    background-color: #fff;
    height: 350px;
    box-shadow: 0 0px 20px 0 rgba(0, 0, 0, 0.2);
  }

  .header {
    position: absolute;
    top: 0;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
  }

  .header .icon-button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
    border-radius: 100px;
    padding: 5px;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    user-select: none;
  }

  .header .icon-button:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }

  .header .icon-button:active {
    background-color: rgba(255, 255, 255, 0.2);

  }

  .main-image {
    height: 40%;
  }

  .main-image img {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .content > div {
    margin-bottom: 10px;
  }
  .content .name {
    font-weight: bold;
    font-size: 20px;
  }
  .content .followers {
    margin-bottom: 30px;
    color: #cccccc;
  }

  .avatar {
    width: 100px;
    height: 100px;
    margin-top: -50px;
  }

  .avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
  }

  .actions {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px
  }


</style>