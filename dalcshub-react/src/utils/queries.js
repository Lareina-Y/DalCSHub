

export const handleFollowOrUnfollowQuery = async (userId, courseId, isFollowQuery, userDetailRefresh) => {
    try {
      const url = isFollowQuery ? "/api/user/follow" : "/api/user/unfollow";
      const response = await fetch(url , {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "userId": userId, "courseId": courseId })
      });
      if (response.status === 200) {
        // TODO: Lareina - Notification message
      } else {
        console.error("Failed to follow/unfollow course");
      }
      userDetailRefresh(userId);
    } catch (error) {
      console.error(error);
    }
  }