// 'use server'

export const createApplication = async (application) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/application`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(application),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to submit application");
    }

    return data;
  } catch (error) {
    console.error("Application Error:", error);
    throw error;
  }
};